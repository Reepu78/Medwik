import { Component } from '@angular/core';
import { PatientDataService } from '../services/patient-data.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.css']
})
export class RegisterUserComponent {

  constructor(
    private patientService:PatientDataService
  ){

  }
  onRegisterPatient(data:any)
  {
    // console.log(data)

    this.patientService.addPatient(data).subscribe();
  }
}
