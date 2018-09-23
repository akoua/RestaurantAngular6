import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MainNavComponent } from './main-nav/main-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule,
   MatListModule, MatCardModule, 
   MatGridListModule, MatMenuModule,
    MatTableModule, MatPaginatorModule,
     MatSortModule, MatDividerModule,
     MatDatepickerModule, MatInputModule,
     MatFormFieldModule, MatNativeDateModule,
     MatSelectModule, MAT_DATE_LOCALE } from '@angular/material';
import { HomeComponent } from './home/home.component';
import { CarteComponent } from './carte/carte.component';
import { ReservationComponent } from './reservation/reservation.component';
import { ContactComponent } from './contact/contact.component';
import { MainDashComponent } from './main-dash/main-dash.component';
import { DishTableComponent } from './dish-table/dish-table.component';
import { QuickLunchService } from './services/quick-lunch.service';
import { ScheduleComponent } from './schedule/schedule.component';
import { HttpClientModule } from '@angular/common/http';
import { PhoneComponent } from './phone/phone.component';



const appRoutes: Routes = [
  {path: '',component: HomeComponent},
  {path: 'carte', component: CarteComponent},
  {path: 'reservation',component: ReservationComponent },
  {path: 'contact', component: ContactComponent},
  {path: 'schedule', component: ScheduleComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MainNavComponent,
    HomeComponent,
    CarteComponent,
    ReservationComponent,
    ContactComponent,
    MainDashComponent,
    DishTableComponent,
    ScheduleComponent,
    PhoneComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatCardModule,
    MatDividerModule,
    MatGridListModule,
    MatMenuModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatSelectModule,
    ReactiveFormsModule,
    FormsModule,    
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [{provide:MAT_DATE_LOCALE, useValue:'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
