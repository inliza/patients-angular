import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PatientsComponent } from './pages/patients/patients.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { PatientAddOrEditComponent } from './modals/patient-add-or-edit/patient-add-or-edit.component';
import { MatDialogModule } from '@angular/material/dialog';
import {MatSelectModule} from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { Globals } from './globals';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientAddOrEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    RouterModule,
    [
      MatFormFieldModule,
      ReactiveFormsModule,
      FormsModule,
      MatIconModule,
      MatInputModule,
      MatButtonModule,
      MatDialogModule, 
      MatSelectModule,
      MatDatepickerModule,
      MatNativeDateModule,
      HttpClientModule
    ]
  ],
  providers: [Globals],
  bootstrap: [AppComponent]
})
export class AppModule { }
