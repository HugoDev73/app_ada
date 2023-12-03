import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { DataIncident } from 'src/app/interfaces/list-data';

@Component({
  selector: 'app-card-info',
  templateUrl: './card-info.component.html',
  styleUrls: ['./card-info.component.scss'],
})
export class CardInfoComponent {
  constructor(private router:Router){}
  @Input() data?: DataIncident;
  @Output() onDelete = new EventEmitter<string>();
  listData: DataIncident[] = [];

  goDetails(){
    localStorage.setItem('dataDetail', JSON.stringify(this.data))
    this.router.navigate(['new-incident'])
  }

  deteteIncident(){
    this.onDelete.emit(this.data?.idIncident)
  }
}
