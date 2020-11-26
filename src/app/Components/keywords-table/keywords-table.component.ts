import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Keywords } from '../../Models/keywords.model';
import { KeywordsTableDataSource } from './keywords-table-datasource';
import { CrudService } from '../../Services/crud.service';
import { ActivatedRoute } from '@angular/router';
import { Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['./keywords-table.component.scss'],
})
export class KeywordsTableComponent implements AfterViewInit, OnInit {
  addKeyForm = this.fb.group({
    key: [null, Validators.required],
    // newKey: this.fb.array([]),
  });
  public itemId: string;
  constructor(private crudService: CrudService, private fb: FormBuilder) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Keywords>;

  dataSource: KeywordsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['key', 'edit', 'delete'];

  ngOnInit(): void {
    this.dataSource = new KeywordsTableDataSource(
      this.crudService.getAllKeywords()
    );
  }

  ngAfterViewInit(): void {
    this.crudService.getAllKeywords().subscribe((key) => {
      this.dataSource.data = key;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource.data;
    });
  }

  deleteKeyword(row: Keywords): void {
    const confirmation = confirm('Seguro que deseas eliminar esta palabra?');
    if (confirmation) {
      this.crudService.deleteKey(row.id);
    }
  }

  addKey(): void {
    const key = this.addKeyForm.value.key;
    this.crudService
      .addKey(key)
      .then(() => {
        this.table.renderRows();
        alert('La palabra se añadió');
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
