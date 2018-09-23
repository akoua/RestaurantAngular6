import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-reservation',
  templateUrl: './reservation.component.html',
  styleUrls: ['./reservation.component.css']
})
export class ReservationComponent implements OnInit {

  reservationForm: FormGroup;
  date: Date = new Date();
  timeOptions: string[] = ["12:00","12:30","13:00","13:30","19:00","19:30","20:00","20:30"];
  peopleOptions: number[] = [1, 2, 3, 4, 5, 6, 7, 8];
  client ={firstName:'', lastName:'', email:'', phone:'' };
  isScheduleOk: boolean = false;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.createForm();
  }

  createForm(){
    this.reservationForm = this.fb.group({
      date: new Date(),
      time: '',
      people: 1
    })
  }

  finalizeReservation(form){
    if (form.valid) {
      console.log('valid');
      console.log(form);
    }    
  }

  saveReservation(){
    if (this.reservationForm.valid) {
      console.log(this.reservationForm);
      this.isScheduleOk = true;
    }
  }

}
