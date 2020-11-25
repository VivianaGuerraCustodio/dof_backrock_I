import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTable } from '@angular/material/table';
// import { MatTabsModule } from '@angular/material/tabs';
import { MatTabGroup } from '@angular/material/tabs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule } from '@angular/material';

@NgModule({
  imports: [
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginator,
    MatSort,
    MatTable,
    MatTabsModule,
    MatTabGroup,
    BrowserAnimationsModule,
  ],
  exports: [
    MatIconModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatPaginator,
    MatSort,
    MatTable,
    MatTabsModule,
    MatTabGroup,
    BrowserAnimationsModule,
  ],
})
export class MaterialModule {}
