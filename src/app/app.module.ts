import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { LandingComponentComponent } from './landing-component/landing-component.component';

import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';

import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CalendarComponentComponent } from './calendar-component/calendar-component.component';

import { NzCalendarModule } from 'ng-zorro-antd/calendar';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { Calendar2Component } from './calendar2/calendar2.component';
import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    LandingComponentComponent,
    CalendarComponentComponent,
    Calendar2Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NzCalendarModule,
    NzButtonModule,
    NzDatePickerModule,
    NzTabsModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US }],
  bootstrap: [AppComponent],
})
export class AppModule {}
