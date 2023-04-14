import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { PatientAddOrEditComponent } from 'src/app/modals/patient-add-or-edit/patient-add-or-edit.component';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  public patients: any = [];
  public patientsCopy: any = [];
  public filter = "";

  constructor(
    private helperModal: MatDialog,
    private service: PatientsService
  ) { }

  ngOnInit(): void {
    this.getAll();
    }

  public search() {
    this.patientsCopy = this.patients.filter((f: any) =>
      f.fistName.toLowerCase().includes(this.filter.toLowerCase()) ||
      f.lastName.toLowerCase().includes(this.filter.toLowerCase()) ||
      f.gender.toLowerCase().includes(this.filter.toLowerCase()) ||
      f.phone.toLowerCase().includes(this.filter.toLowerCase())
    );
  }

  public getAll() {
    this.service.get().subscribe((data: any) => {
      this.patients = data.data;
      this.patientsCopy = this.patients;
    })
  }

  public openModal(id: string) {
    const patientModal = this.helperModal.open(PatientAddOrEditComponent, {
      height: 'auto',
      data: {
        id: id
      }
    });
    patientModal.afterClosed().subscribe((result) => {
      if (result) {
        if (result == 'Ok') {
          this.getAll();
        }
      }
    });
  }

  public deletePatient(id: string) {
    Swal.fire({
      icon: 'warning',
      title: 'Are you sure you want to delete this patient?',
      showCancelButton: true,
      confirmButtonText: 'Yes',
      
    }).then((result) => {
      if (result.isConfirmed) {
        this.service.delete(id).subscribe(data => {
          this.getAll();
          Swal.fire({
            icon: 'success',
            title: 'Success',
            text: "Patient deleted successfully"
          });
        }, err => {
          Swal.fire({
            icon: 'error',
            title: 'Something went wrong. Please try again.',
          });
          console.error(err);
        });
      }});
   
  }
}
