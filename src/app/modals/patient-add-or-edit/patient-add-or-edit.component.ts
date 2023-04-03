import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Patient } from 'src/app/models/patient.model';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patient-add-or-edit',
  templateUrl: './patient-add-or-edit.component.html',
  styleUrls: ['./patient-add-or-edit.component.css']
})
export class PatientAddOrEditComponent implements OnInit {
  public editing = false;
  public patient: Patient;
  public genderSelect = new FormControl('', [Validators.required]);
  public maxDate = new Date();

  constructor(
    public dialogRef: MatDialogRef<PatientAddOrEditComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private service: PatientsService

  ) { }

  ngOnInit(): void {
    
    if (this.data.id === '') {
      this.patient = new Patient();
    } else {
      this.editing = true;
      this.getById(this.data.id);
    }

  }

  private getById(id: string) {
    this.service.getById(id).subscribe((data: any) => {
      this.patient = data.data;
    }, err => {
      Swal.fire({
        icon: 'error',
        title: 'Something went wrong. Please try again.',
      });
      console.error(err);
    })
  }

  saveOrUpdate() {
    if (this.editing) {
      this.service.Update(this.patient).subscribe((data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Patient updated successfully"
        });
        this.dialogRef.close("Ok");
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong. Please try again.',
        });
        console.error(err);
      })
    } else {
      this.service.Add(this.patient).subscribe((data: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Success',
          text: "Patient saved successfully"
        });
        this.dialogRef.close("Ok");
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Something went wrong. Please try again.',
        });
        console.error(err);
      })
    }
  }
}
