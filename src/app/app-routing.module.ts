import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationComponent } from './Components/authentication/authentication.component';
import { AdminComponent } from './Components/admin/admin.component';

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
  // {
  //   path: 'Documentos',
  //   component: adsa,
  // },
  {
    path: 'Administración',
    component: AdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
