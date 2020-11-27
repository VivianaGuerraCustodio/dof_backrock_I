import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Users } from '../../Models/users.model';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class CrudUsersService {
  constructor(public firestore: AngularFirestore) {}

  addUser(name: string, email: string, role: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`users/${id}`).set({ name, email, role });
  }

  deleteUser(userId: string): Promise<void> {
    return this.firestore.doc(`users/${userId}`).delete();
  }

  getUser(): Observable<Users[]> {
    return this.firestore
      .collection<Users>('users')
      .valueChanges({ idField: 'id' });
  }

  userRegister(email: string): Promise<any> {
    const password = '654321';
    return firebase.auth().createUserWithEmailAndPassword(email, password);
  }
}
