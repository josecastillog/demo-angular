import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';
import { Calendar2Component } from './calendar2/calendar2.component';

const routes: Routes = [
  { path: '', component: LoginComponentComponent },
  { path: 'landing', component: LandingComponentComponent },
  { path: 'calendar', component: CalendarComponentComponent },
  { path: 'calendar2', component: Calendar2Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
