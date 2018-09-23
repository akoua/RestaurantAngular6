import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointState, BreakpointObserver } from '@angular/cdk/layout';
import { QuickLunchService } from '../services/quick-lunch.service';
import { Food } from '../models/food.interface';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

@Component({
  selector: 'app-main-dash',
  templateUrl: './main-dash.component.html',
  styleUrls: ['./main-dash.component.css']
})
export class MainDashComponent implements OnInit {

  burgers : Food[];
  pizzas : Food[];
  galettes: Food[];

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [        
          { title: 'Burgers', cols: 2, rows: 1, id:'brg' },
          { title: 'Galettes/crêpes', cols: 2, rows: 1, id:'glt' },
          { title: 'Pizza', cols: 2, rows: 2, id:'pzz' }
        ];
      }

      return [
        { title: 'Burgers', cols: 2, rows: 1, id:'brg' },
        { title: 'Galettes/crêpes', cols: 2, rows: 1, id:'glt' },
        { title: 'Pizza', cols: 2, rows: 2, id:'pzz' }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private quickService: QuickLunchService) {}

  ngOnInit(){
    registerLocaleData(localeFr, 'fr');
    this.burgers = this.quickService.getBurgers();
    this.pizzas = this.quickService.getPizzas();
    this.galettes = this.quickService.getGalettes();    
  }
}
