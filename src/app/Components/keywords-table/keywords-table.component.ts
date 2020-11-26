import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
import { Keywords } from '../../Models/keywords.model';
import { KeywordsTableDataSource } from './keywords-table-datasource';
import { CrudService } from '../../Services/crud.service';

@Component({
  selector: 'app-keywords-table',
  templateUrl: './keywords-table.component.html',
  styleUrls: ['./keywords-table.component.scss'],
})
export class KeywordsTableComponent implements AfterViewInit, OnInit {
  constructor(private crudService: CrudService) {}

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<Keywords>;
  dataSource: KeywordsTableDataSource;

  /** Columns displayed in the table. Columns IDs can be added, removed, or reordered. */
  displayedColumns = ['key', 'edit', 'delete'];

  ngOnInit(): void {
    this.dataSource = new KeywordsTableDataSource(this.crudService);
  }

  ngAfterViewInit(): void {
    this.crudService.getAllKeywords().subscribe((key) => {
      this.dataSource.data = key;
      this.dataSource.sort = this.sort;
      this.dataSource.paginator = this.paginator;
      this.table.dataSource = this.dataSource;
    });
  }
}
