import { EmailsManagementService } from '../../../Services/emails-management-service/emails-management.service';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Users } from '../../../Models/users.model';
import { EmailsTableDataSource } from './emails-management-datasource';
import { ActivatedRoute } from '@angular/router';
import {
  Validators,
  FormBuilder,
  FormArray,
  FormControl,
} from '@angular/forms';

@Component({
  selector: 'app-emails-management',
  templateUrl: './emails-management.component.html',
  styleUrls: ['./emails-management.component.scss'],
})
export class EmailsManagementComponent implements OnInit {
  addEmailForm = this.fb.group({
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
    private emailsManagementService: EmailsManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Users>;

  dataSource: EmailsTableDataSource;

  displayedColumns = ['name', 'email', 'role', 'delete'];

  ngOnInit(): void {
    this.getData();
  }

  ngAfterViewInit(): void {
    this.emailsManagementService.getEmail().subscribe((emails) => {
      this.dataSource.data = emails;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  getData() {
    this.dataSource = new EmailsTableDataSource(
      this.emailsManagementService.getEmail()
    );
  }

  deleteEmail(user: Users): void {
    const confirmation = confirm('Seguro que deseas eliminar este usuario?');
    if (confirmation) {
      this.emailsManagementService.deleteEmail(user.id);
      this.getData();
    }
  }

  addEmail(): any {
    const name = this.addEmailForm.value.name;
    const email = this.addEmailForm.value.email;
    const role = this.addEmailForm.value.role;

    if (name && email && role !== '' && role != null) {
      this.emailsManagementService
        .addEmail(name, email, role)
        .then(() => {
          alert('El correo se añadió a la base de datos');
          this.getData();
        })
        .catch((err) => {
          alert('Error ' + err);
        });
    } else {
      alert('Faltan campos');
    }
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.data.filter = filterValue.trim().toLowerCase();
  }
}
