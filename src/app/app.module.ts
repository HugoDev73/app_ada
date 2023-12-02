import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormIncidentComponent } from './components/form-incident/form-incident.component';
import { HomeIncidentComponent } from './pages/home-incident/home-incident.component';
import { InputTextComponent } from './components/input-text/input-text.component';
import { NewIncidentComponent } from './pages/new-incident/new-incident.component';
import { InputSelectComponent } from './components/input-select/input-select.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FormIncidentComponent,
    HomeIncidentComponent,
    InputTextComponent,
    NewIncidentComponent,
    InputSelectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
