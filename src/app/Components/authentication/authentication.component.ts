import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Services/auth-service/auth.service';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent implements OnInit {
  hide = true;

  @Input() error: string | null;

  @Output() submitEM = new EventEmitter();

  // hide = true;
  // email = new FormControl('', [Validators.required, Validators.email]);
  // getErrorMessage(): any {
  //   if (this.email.hasError('required')) {
  //     return 'Debes ingresar un correo';
  //   }
  //   return this.email.hasError('email') ? 'No es un correo valido' : '';
  // }

  authForm = this.formBuilder.group({
    email: [null, Validators.required],
    password: [null, Validators.required],
  });

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  async loginUser(): Promise<void> {
    const email = this.authForm.get('email').value;
    const password = this.authForm.get('password').value;
    console.log(email, password);

    this.authService
      .loginUser(email, password)
      .then(() => {
        // this.router.navigateByUrl('home');
        console.log('inicio de sesión con exito');
        this.router.navigate(['documentos']);
      })
      .catch(() => {
        alert('Usuario invalido');
      });
  }

  resetPassword(): void {
    console.log('reestableciendo pass');
    const email = this.authForm.get('email').value;
    this.authService.resetPassword(email);
    alert('Recibiras un correo para cambiar tu contraseña');
  }

  logout(): void {
    this.authService
      .logoutUser()
      .then(() => {
        this.router.navigate(['inicio']);
      })
      .catch((e) => {
        console.log(e);
      });
  }

  ngOnInit(): void {}
}
