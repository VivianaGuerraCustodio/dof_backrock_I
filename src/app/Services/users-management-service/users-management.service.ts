import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Users } from '../../Models/users.model';
import firebase from 'firebase/app';
import { map } from 'rxjs/operators';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class UsersManagementService {
  constructor(public firestore: AngularFirestore) {}

  addUser(name: string, email: string, role: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`users/${id}`).set({ name, email, role });
  }

  deleteUser(userId: string): Promise<void> {
    return this.firestore.doc(`users/${userId}`).delete();
  }

  getUsers(): Observable<Users[]> {
    return this.firestore
      .collection<Users>('users')
      .snapshotChanges()
      .pipe(
        map((actions) =>
          actions.map((a) => {
            const data = a.payload.doc.data() as Users;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
    // .valueChanges({ idField: 'id' });
  }

  userRegister(email: string): Promise<any> {
    const password = '654321';
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
