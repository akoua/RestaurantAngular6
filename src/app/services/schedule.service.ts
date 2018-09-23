import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Schedule } from '../models/schedule.interface';
import { EventEvening } from '../models/event.evening';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) { }

  search(term: string): Observable<EventEvening[]> {
    const termLoCase: string = term.toLocaleLowerCase();
    //console.log('term', term === '');
    if (term === '') {
      return new Observable;
    }
    return this.http.get<Schedule> ('assets/schedules.json')
                    .pipe(
                      map(res => res.events.filter(evt => evt.title.toLocaleLowerCase().indexOf(termLoCase) > -1 || evt.description.toLocaleLowerCase().indexOf(termLoCase) > -1 )),
                      tap(x => console.log(x))
                    );

  }
}
