import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import firebase from 'firebase/app';
import 'firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private af: AngularFireAuth) {}

  loginUser(
    email: string,
    password: string
  ): Promise<firebase.auth.UserCredential> {
    return firebase.auth().signInWithEmailAndPassword(email, password);
  }

  resetPassword(email: string): Promise<void> {
    return firebase.auth().sendPasswordResetEmail(email);
  }

  logoutUser(): Promise<void> {
    // return this.af.signOut();
    return firebase.auth().signOut();
  }

  hasUser() {
    return this.af.authState;
  }

  updatePass(newPassword): Promise<void> {
    let user = firebase.auth().currentUser;
    return user.updatePassword(newPassword);
  }
}
