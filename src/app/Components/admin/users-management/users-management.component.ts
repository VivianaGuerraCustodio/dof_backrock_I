import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Users } from '../../../Models/users.model';
import { UsersTableDataSource } from './users-management-datasource';
import { UsersManagementService } from '../../../Services/users-management-service/users-management.service';
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
export class UsersManagementComponent implements AfterViewInit, OnInit {
  addUserForm = this.fb.group({
    name: [null, Validators.required],
    email: [null, Validators.required],
    role: [null, Validators.required],
  });

  roles = [
    { cat: 'Usuario', val: 'user' },
    { cat: 'Administrador', val: 'admin' },
  ];

  public users$;
  public userId: string;

  constructor(
    private usersManagementService: UsersManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Users>;

  dataSource: UsersTableDataSource;

  displayedColumns = ['name', 'email', 'role', 'delete'];

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    this.usersManagementService.getUsers().subscribe((users) => {
      this.dataSource.data = users;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  getData() {
    this.dataSource = new UsersTableDataSource(
      this.usersManagementService.getUsers()
    );
  }

  deleteUser(user: Users): void {
    const confirmation = confirm('Seguro que deseas eliminar este usuario?');
    if (confirmation) {
      this.usersManagementService.deleteUser(user.id);
      this.getData();
    }
  }

  addUser(): any {
    const name = this.addUserForm.value.name;
    const email = this.addUserForm.value.email;
    const role = this.addUserForm.value.role;

    console.log(role);

    if (name && email && role !== '' && role != null) {
      this.usersManagementService
        .addUser(name, email, role)
        .then(() => {
          alert('El usuario se añadió a la base de datos');
          this.getData();
        })
        .catch((err) => {
          alert('Error ' + err);
        });
    } else {
      alert('Faltan campos');
    }
  }

  userRegister(): any {
    const email = this.addUserForm.value.email;
    this.usersManagementService.userRegister(email);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.data.filter = filterValue.trim().toLowerCase();
  }
}
