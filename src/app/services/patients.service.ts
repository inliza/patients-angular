import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Globals } from '../globals';
import { Patient } from 'src/app/models/patient.model';


@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  constructor(private http: HttpClient, private global: Globals) {
  }

  public get() {
    const url_api = `${this.global.urlApi}patients`;
    return this.http.get(url_api);
  }

  public getById(id: string) {
    const url_api = `${this.global.urlApi}patients/${id}`;
    return this.http.get(url_api);
  }

  public Add(patient: Patient) {
    const url_api = `${this.global.urlApi}patients`;
    return this.http.post(url_api, patient);
  }

  public Update(patient: Patient) {
    const url_api = `${this.global.urlApi}patients/${patient.id}`;
    return this.http.put(url_api, patient);
  }

  public delete(id: string) {
    const url_api = `${this.global.urlApi}patients/${id}`;
    return this.http.delete(url_api);
  }
}
