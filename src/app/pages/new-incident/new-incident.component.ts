import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataIncident } from 'src/app/interfaces/list-data';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.scss'],
})
export class NewIncidentComponent implements OnInit {
  enumSexuallity = [
    { name: 'Masculino', value: 'Masculino' },
    { name: 'Femenino', value: 'Femenino' },
  ];

  enumYesNo = [
    { name: 'Si', value: 'Si' },
    { name: 'No', value: 'No' },
  ];

  enumMaritalStatus = [
    { name: 'Soltero', value: 'Soltero' },
    { name: 'Casado', value: 'Casado' },
    { name: 'Viudo', value: 'Viudo' },
    { name: 'Divorciado', value: 'Casado' },
  ];

  enumBusinessLine = [
    { name: 'Mobility', value: 'Mobility' },
    { name: 'Hospitality', value: 'Hospitality' },
    { name: 'Real State', value: 'RealState' },
  ];

  enumBusinessUnit = [
    { name: 'Agencias o puntos de venta', value: 'agency' },
    { name: 'Hoteles', value: 'hotels' },
    { name: 'Plazas', value: 'place' },
  ];

  enumJobTitle = [
    { name: 'Colaborador', value: 'Colaborador' },
    { name: 'Manager', value: 'Manager' },
  ];

  enumMedicalAttention = [
    { name: 'IMSS', value: 'IMSS' },
    { name: 'ISSSTE', value: 'ISSSTE' },
    { name: 'Seguro popular', value: 'Seguro_popular' },
    { name: 'Privada', value: 'Privada' },
  ];

  form = new FormGroup({
    rfcCustomer: new FormControl('', []),
    curpCustomer: new FormControl('', []),
    nameCustomer: new FormControl('', []),
    lastNameCustomer: new FormControl('', []),
    surnameCustomer: new FormControl('', []),
    streetCustomer: new FormControl('', []),
    suburbCustomer: new FormControl('', []),
    exteriorNumberCustomer: new FormControl('', []),
    interiorNumberCustomer: new FormControl('', []),
    postalCodeCustomer: new FormControl('', []),
    betweenStreetCustomer: new FormControl('', []),
    sexuallityCustomer: new FormControl('', []),
    ageCustomer: new FormControl('', []),
    hasChildrenCustomer: new FormControl('', []),
    numberChildrenCustomer: new FormControl('', []),
    maritalStatusCustomer: new FormControl('', []),

    rfcCompany: new FormControl('', []),
    businessName: new FormControl('', []),
    businessLine: new FormControl('', []),
    businessUnit: new FormControl('', []),
    streetCompany: new FormControl('', []),
    suburbCompany: new FormControl('', []),
    numberCompany: new FormControl('', []),
    postalCodeCompany: new FormControl('', []),
    betweenStreetCompany: new FormControl('', []),
    jobTitle: new FormControl('', []),
    departament: new FormControl('', []),
    area: new FormControl('', []),
    managerArea: new FormControl('', []),
    bossArea: new FormControl('', []),
    phoneNumber: new FormControl('', []),
    email: new FormControl('', []),

    date: new FormControl('', []),
    dateAccident: new FormControl('', []),
    timeAccidente: new FormControl('', []),
    howDidItHappen: new FormControl('', []),
    unsafeActs: new FormControl('', []),
    didYouConsumeAnyMedication: new FormControl('', []),
    youWereAlone: new FormControl('', []),
    wereThereWitnesses: new FormControl('', []),
    affectedBodyArea: new FormControl('', []),
    didYouGoToClinic: new FormControl('', []),
    injuryCaused: new FormControl('', []),
    didYouReceiveMedicalAttention: new FormControl('', []),
    whenReceiveMedicalAttention: new FormControl('', []),
    securityNumber: new FormControl('', []),
    receivedDisability: new FormControl('', []),
    howLong: new FormControl('', []),
  });

  listData: DataIncident[] = [];
  dataDetail?: DataIncident;

  constructor(private router: Router) {}

  ngOnInit(): void {
    const data = JSON.parse(localStorage.getItem('list_data')!);
    const detail = JSON.parse(localStorage.getItem('dataDetail')!);
    if (data) {
      this.listData = data;
    }
    if (detail) {
      this.dataDetail = detail;
      this.form.patchValue(this.dataDetail!);
    }
  }

  onSubmitFormCreate() {
    const data = this.form.value as DataIncident;
    data.idIncident = this.generateUUID();
    this.listData.push(data);
    localStorage.setItem('list_data', JSON.stringify(this.listData));
    this.showDialogSuccess();
  }

  onSubmitFormUpdate() {
    const data = this.form.value as DataIncident;
    data.idIncident = this.dataDetail?.idIncident;
    const filter = this.listData.filter(
      (it) => it.idIncident !== this.dataDetail?.idIncident
    );
    filter.push(data);
    this.listData = filter;
    localStorage.setItem('list_data', JSON.stringify(this.listData));
    this.showDialogSuccess();
  }

  showDialogSuccess() {
    Swal.fire({
      title: 'Exito',
      text: 'Registro creado correctamente',
      icon: 'success',
    }).then((result) => {
      this.router.navigate(['/']);
    });
  }

  generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(
      /[xy]/g,
      function (c) {
        var r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c == 'x' ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
    return uuid;
  }
}
