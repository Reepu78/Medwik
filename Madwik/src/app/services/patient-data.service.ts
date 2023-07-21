import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PatientDataService {
  url = "https://localhost:7075/api/PatientAPI"
  constructor(
    private http:HttpClient) { }

  addPatient(data:any){
    return this.http.post(this.url , data);
  }

  // addPatient(){
  //   return this.http.get(this.url);
  // }



}
