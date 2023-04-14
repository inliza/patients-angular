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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { Globals } from './globals';
import { Http_Interceptor } from './interceptors/http-interceptor';
import { LoginComponent } from './pages/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    PatientsComponent,
    PatientAddOrEditComponent,
    LoginComponent
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
  providers: [
    Globals,
  {provide: HTTP_INTERCEPTORS, useClass: Http_Interceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
