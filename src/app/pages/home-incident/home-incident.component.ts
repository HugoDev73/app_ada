import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataIncident } from 'src/app/interfaces/list-data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home-incident',
  templateUrl: './home-incident.component.html',
  styleUrls: ['./home-incident.component.scss']
})
export class HomeIncidentComponent implements OnInit {
  constructor(
    private router:Router
  ){}

  listData:DataIncident[] = []

  ngOnInit(): void {
    localStorage.removeItem('dataDetail')
    const data = JSON.parse(localStorage.getItem('list_data')!)
    if(data){
      this.listData = data
      console.log(this.listData);
      
    }
  }
  registerNew(){
    this.router.navigate(['new-incident'])
  }

  onDeleteItem(id:string){
    Swal.fire({
      title: "¿Estas seguro de eliminar este incidente?",
      text: "",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar"
    }).then((result) => {
      if (result.isConfirmed) {
        this.deleteItem(id)
        Swal.fire({
          title: "Eliminado",
          text: "Eliminado correctamente",
          icon: "success"
        });
      }
    });
    
  }

  deleteItem(id:string){
    const data = JSON.parse(localStorage.getItem('list_data')!);
    if (data) {
      this.listData = data;
      const filter = this.listData.filter(it => it.idIncident !== id)
      this.listData = filter
      localStorage.setItem('list_data', JSON.stringify(this.listData));
    }
  }
}
