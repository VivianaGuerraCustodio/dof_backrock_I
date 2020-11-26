import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// import {
//   MatCardModule,
//   MatTableModule,
//   MatFormFieldModule,
//   MatPaginator,
//   MatSortModule,
//   MatTableModule,
//   MatTabsModule,
//   MatTabGroupModule,
//   BrowserAnimationsModule,
// } from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    BrowserAnimationsModule,
  ],
})
export class MaterialModule {}
