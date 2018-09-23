import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, map, tap, switchMap, filter } from "rxjs/operators";
import { ScheduleService } from '../services/schedule.service';
import { EventEvening } from "../models/event.evening";

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {

  array = [1,2,3];
  searchTerm = new FormControl();
  searchTerms$: Observable<string> = this.searchTerm.valueChanges;
  result: EventEvening[] = [] ;

  constructor( private scheduleService: ScheduleService) { }

  ngOnInit() {
    this.searchTerms$
    .pipe(
      /*tap(x => console.log('avant map',x)),      
      map(x => x.toUpperCase()),
      map(upperCased => this.reverse(upperCased)),*/
      debounceTime(1000),
      switchMap(word => this.scheduleService.search(word)),      
      tap(x => console.log(x))
    )
    .subscribe(
      (val) => {this.result = val},
      (err) => console.log(err)
    )
  }

  reverse(word){
    return word.split('').reverse().join('');
  }

}
