import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Services/auth-service/auth.service';

@Component({
  selector: 'app-security',
  templateUrl: './security.component.html',
  styleUrls: ['./security.component.scss'],
})
export class SecurityComponent implements OnInit {
  newPassword: string;
  hide = true;
  constructor(private authService: AuthService) {}
  // confirm() {
  //   alert(
  //     'tu contraseña se actualizó de manera exitosa, por favor revisa tu correo '
  //   );
  // }
  ngOnInit(): void {}

  updatePass() {
    this.authService
      .updatePass(this.newPassword)
      .then(function () {
        alert(
          'tu contraseña se actualizó de manera exitosa, por favor revisa tu correo '
        );
      })
      .catch(function (error) {
        alert('error al actualizar contraseña, vuelve a intentarlo');
      });
  }
}
