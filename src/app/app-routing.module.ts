import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIncidentComponent } from './pages/home-incident/home-incident.component';

const routes: Routes = [
  {
    path: '',
    component: HomeIncidentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
