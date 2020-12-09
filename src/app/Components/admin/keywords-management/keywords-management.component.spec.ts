import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';

import { KeywordsManagementComponent } from './keywords-management.component';

describe('KeywordsManagementComponent', () => {
  let component: KeywordsManagementComponent;
  let fixture: ComponentFixture<KeywordsManagementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [KeywordsManagementComponent],
      imports: [
        NoopAnimationsModule,
        MatPaginatorModule,
        MatSortModule,
        MatTableModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
