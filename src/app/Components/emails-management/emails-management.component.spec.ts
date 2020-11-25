import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmailsManagementComponent } from './emails-management.component';

describe('EmailsManagementComponent', () => {
  let component: EmailsManagementComponent;
  let fixture: ComponentFixture<EmailsManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmailsManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmailsManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
