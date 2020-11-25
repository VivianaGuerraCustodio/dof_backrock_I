import { Component, OnInit } from '@angular/core';
import { CrudUsersService } from '../../Services/users-management-service/users-management.service';
import { ActivatedRoute } from '@angular/router';
import {
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-users-management',
  templateUrl: './users-management.component.html',
  styleUrls: ['./users-management.component.scss'],
})
export class UsersManagementComponent implements OnInit {
  addUserForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    role: [null, Validators.required],
  });

  roles = [{ cat: 'Administrador' }, { cat: 'Usuario' }];

  public users$;
  public userId: string;

  constructor(
    private crudUsersService: CrudUsersService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get('id');
    this.crudUsersService
      .getUser()
      .pipe()
      .subscribe((user) => {
        this.users$ = user;
      });
  }

  deleteUser(userId: string): void {
    const confirmation = confirm('Seguro que deseas eliminar este usuario?');
    if (confirmation) {
      this.crudUsersService.deleteUser(userId);
    }
  }

  addUser(): any {
    const name = this.addUserForm.value.name;
    const email = this.addUserForm.value.email;
    const role = this.addUserForm.value.role;

    this.crudUsersService
      .addUser(name, email, role)
      .then(() => {
        alert('El usuario se añadió a la base de datos');
      })
      .catch((err) => {
        alert('Error ' + err);
      });
  }

  userRegister(): any {
    const email = this.addUserForm.value.email;
    this.crudUsersService.userRegister(email).then(() => {
      alert('El usuario se registro');
    });
  }
}
