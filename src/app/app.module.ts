import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AgGridModule } from 'ag-grid-angular';

import { AppComponent } from './app.component';
import { SideHeaderComponent } from './side-header/side-header.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ImpressumComponent } from './impressum/impressum.component';
import { DataSecureComponent } from './data-secure/data-secure.component';
import { AppRoutingModule } from './app-routing.module';
import { EmissionValueComponent } from './emission-value/emission-value.component';
import { EventsComponent } from './events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    SideHeaderComponent,
    HomeComponent,
    FooterComponent,
    ImpressumComponent,
    DataSecureComponent,
    EmissionValueComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AgGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
