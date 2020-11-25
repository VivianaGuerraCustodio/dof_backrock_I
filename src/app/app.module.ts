import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KeywordsComponent } from './Components/keywords/keywords.component';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { KeywordsTableComponent } from './Components/keywords-table/keywords-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersManagementComponent } from './Components/users-management/users-management.component';
import { EmailsManagementComponent } from './Components/emails-management/emails-management.component';
import { AdminComponent } from './Components/admin/admin.component';
// import { MatTabsModule } from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    KeywordsComponent,
    AuthenticationComponent,
    KeywordsTableComponent,
    UsersManagementComponent,
    EmailsManagementComponent,
    AdminComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    ReactiveFormsModule,
    FormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    BrowserAnimationsModule,
    // MatTabsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
