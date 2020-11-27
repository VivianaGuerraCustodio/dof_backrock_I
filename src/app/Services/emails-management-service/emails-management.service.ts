import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Users } from '../../Models/users.model';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class EmailsManagementService {
  constructor(public firestore: AngularFirestore) {}

  addEmail(name: string, email: string, role: string): Promise<void> {
    const id = this.firestore.createId();
    return this.firestore.doc(`emails/${id}`).set({ name, email, role });
  }

  deleteEmail(userId: string): Promise<void> {
    return this.firestore.doc(`emails/${userId}`).delete();
  }

  getEmail(): Observable<Users[]> {
    return this.firestore
      .collection<Users>('emails')
      .valueChanges({ idField: 'id' });
  }
}
