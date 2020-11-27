import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Suggestions } from '../../Models/suggestions.model';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class SuggestionsService {
  constructor(public firestore: AngularFirestore) {}

  addSuggestion(keyword: string, name: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`suggestions/${id}`).set({ keyword, name });
  }

  deleteSuggestion(userId: string): Promise<void> {
    return this.firestore.doc(`suggestions/${userId}`).delete();
  }

  getSuggestion(): Observable<Suggestions[]> {
    return this.firestore
      .collection<Suggestions>('suggestions')
      .valueChanges({ idField: 'id' });
  }
}
