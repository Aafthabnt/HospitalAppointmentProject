import { Component, OnInit } from '@angular/core';
import { Patient } from './Patient';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PatientsService } from 'src/app/services/patients.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-patientappointment',
  templateUrl: './patientappointment.component.html',
  styleUrls: ['./patientappointment.component.css']
})
export class PatientappointmentComponent implements OnInit {

  constructor(private sendPatient:PatientsService,private route:Router) { }

  ngOnInit(): void {
  }
  
  patient:Patient=new Patient();
selectedOption: string='';
genders:any=['Male',
'Female'];
  

radioChangeHandler(event: any){
  this.selectedOption=event.target.value;
  this.patient.gender=this.selectedOption
}




 SelectedDocter:string='';
 selectChangeHandler (event:any){
     this.SelectedDocter=event.target.value;
     this.patient.specialization=this.SelectedDocter
 }
 

onSubmit(){
 // console.log(this.patient);
  if(this.patient.phonenumber==null && this.patient.name==null){
    Swal.fire("Please fill all details");
    
  }
  else{
  console.log(this.patient);
  this.sendPatient.sendPatients(this.patient).subscribe((data=>{
  //  console.log(data);
    Swal.fire("Successfully Submitted to admin");
  }))}
}

}
