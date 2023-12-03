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
import { ButtonComponent } from './components/button/button.component';
import { CardLayoutComponent } from './components/card-layout/card-layout.component';
import { CardInfoComponent } from './components/card-info/card-info.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';

@NgModule({
  declarations: [
    AppComponent,
    FormIncidentComponent,
    HomeIncidentComponent,
    InputTextComponent,
    NewIncidentComponent,
    InputSelectComponent,
    ButtonComponent,
    CardLayoutComponent,
    CardInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    SweetAlert2Module.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
