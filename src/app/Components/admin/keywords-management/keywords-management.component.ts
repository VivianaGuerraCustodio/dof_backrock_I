import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Keywords } from '../../../Models/keywords.model';
import { KeywordsManagementDataSource } from './keywords-management-datasource';
import { CrudKeywordsService } from '../../../Services/crud-keywords-service/crud-keywords.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-keywords-management',
  templateUrl: './keywords-management.component.html',
  styleUrls: ['./keywords-management.component.scss'],
})
export class KeywordsManagementComponent implements AfterViewInit, OnInit {
  addKeyForm = this.fb.group({
    key: [null, Validators.required],
    // newKey: this.fb.array([]),
  });
  public itemId: string;
  constructor(
    private crudService: CrudKeywordsService,
    private fb: FormBuilder
  ) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Keywords>;

  dataSource: KeywordsManagementDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['key', 'delete'];

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this.dataSource = new KeywordsManagementDataSource(
      this.crudService.getKey()
    );
  }

  ngAfterViewInit(): void {
    this.crudService.getAllKeywords().subscribe((key) => {
      this.dataSource.data = key;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }

  deleteKeyword(row: Keywords): void {
    const confirmation = confirm('Seguro que deseas eliminar esta palabra?');
    if (confirmation) {
      this.crudService.deleteKey(row.id);
      this.getData();
    }
  }

  addKey(): void {
    const key = this.addKeyForm.value.key;
    this.crudService
      .addKey(key)
      .then(() => {
        alert('La palabra se añadió');
        this.getData();
      })
      .catch((err) => {
        alert('Error ' + err);
      });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;

    this.dataSource.data.filter = filterValue.trim().toLowerCase();
  }
}
