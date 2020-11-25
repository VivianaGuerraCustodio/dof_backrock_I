import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import {
  KeywordsTableDataSource,
  KeywordsTableItem,
} from './keywords-table-datasource';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['./keywords-table.component.scss'],
})
export class KeywordsTableComponent implements AfterViewInit, OnInit {
  public keys$;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<KeywordsTableItem>;
  dataSource: KeywordsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['id', 'name'];

  constructor(private crudService: CrudService) {}

  ngOnInit(): void {
    this.dataSource = new KeywordsTableDataSource();
    this.crudService
      .getKey()
      .pipe()
      .subscribe((key) => {
        this.keys$ = key;
        console.log(this.keys$);
      });
  }

  ngAfterViewInit(): void {
    console.log(this.dataSource);
    console.log(this.keys$);

    this.dataSource.sort = this.sort;
    this.dataSource.paginator = this.paginator;
    this.table.dataSource = this.dataSource;
  }
}
