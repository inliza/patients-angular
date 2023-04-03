import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientAddOrEditComponent } from './patient-add-or-edit.component';

describe('PatientAddOrEditComponent', () => {
  let component: PatientAddOrEditComponent;
  let fixture: ComponentFixture<PatientAddOrEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientAddOrEditComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PatientAddOrEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
