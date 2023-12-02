import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-incident',
  templateUrl: './home-incident.component.html',
  styleUrls: ['./home-incident.component.scss']
})
export class HomeIncidentComponent {
  constructor(
    private router:Router
  ){}


  registerNew(){
    this.router.navigate(['new-incident'])
  }
}
