import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { ActionSequence } from 'protractor';
import { Observable } from 'rxjs';
import { Keywords } from '../../Models/keywords.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class CrudKeywordsService {
  constructor(private firestore: AngularFirestore) {}

  addKey(key: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`keywords/${id}`).set({ key });
  }

  deleteKey(keyId: string): Promise<void> {
    return this.firestore.doc(`keywords/${keyId}`).delete();
  }

  getKey(): Observable<Keywords[]> {
    return this.firestore
      .collection<Keywords>('keywords')
      .valueChanges({ idField: 'id' });
  }

  getAllKeywords(): Observable<Keywords[]> {
    return this.firestore
      .collection<Keywords>('keywords')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Keywords;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  // addArrKey(key: Array<string>): Promise<void> {
  //   const id = this.firestore.createId();
  //   return this.firestore.doc(`keys/${id}`).set({ key });
  // }
}
