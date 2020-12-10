import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { Documents } from '../../Models/documents.model';
import { DocumentsService } from '../../Services/documents-service/documents.service';
import { DocumentsTableDataSource } from './documents-datasource';
import { Validators, FormBuilder, FormControl } from '@angular/forms';

import {
  MAT_MOMENT_DATE_FORMATS,
  MomentDateAdapter,
} from '@angular/material-moment-adapter';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
} from '@angular/material/core';
import moment from 'moment';

@Component({
  selector: 'app-documents',
  templateUrl: './documents.component.html',
  styleUrls: ['./documents.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    { provide: MAT_DATE_FORMATS, useValue: MAT_MOMENT_DATE_FORMATS },
  ],
})
export class DocumentsComponent implements AfterViewInit, OnInit {
  addKeyForm = this.fb.group({
    dateForm: [null, Validators.required],
    // newKey: this.fb.array([]),
  });

  date = moment().format('DD-MM-YYYY');
  dateStart = this.date.toString();
  dateForm = new FormControl(this.date);

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Documents>;

  constructor(
    private documentsService: DocumentsService,
    private fb: FormBuilder,
    private dp: MatDatepickerModule
  ) {}

  dataSource: DocumentsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['text'];

  ngOnInit(): void {
    this.getData(this.dateStart);
  }

  ngAfterViewInit(): void {
    this.documentsService.getDocuments(this.dateStart).subscribe((document) => {
      this.dataSource.data = document;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  getData(dateStart) {
    this.dataSource = new DocumentsTableDataSource(
      this.documentsService.getDocuments(dateStart)
    );
  }

  getDocuments(dateStart) {
    this.documentsService.getDocuments(dateStart).subscribe((res) => {
      this.getData(dateStart);
      this.table.dataSource = res;
    });
  }

  prueba(objDate) {
    this.dateStart = objDate.value.format('DD-MM-YYYY').toString();
  }
}
