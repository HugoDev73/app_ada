import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIncidentComponent } from './pages/home-incident/home-incident.component';
import { NewIncidentComponent } from './pages/new-incident/new-incident.component';

const routes: Routes = [
  {
    path: '',
    component: HomeIncidentComponent
  },
  {
    path: 'new-incident',
    component: NewIncidentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
