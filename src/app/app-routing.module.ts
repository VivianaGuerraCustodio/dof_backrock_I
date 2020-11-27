import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { AdminComponent } from './Components/admin/admin.component';
import { DocumentsComponent } from './Components/documents/documents.component';
import { SecurityComponent } from './Components/security/security.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full',
  },
  {
    path: 'inicio',
    component: AuthenticationComponent,
  },
  {
    path: 'documentos',
    component: DocumentsComponent,
  },
  {
    path: 'admin',
    component: AdminComponent,
  },
  {
    path: 'seguridad',
    component: SecurityComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
