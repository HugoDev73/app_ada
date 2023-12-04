import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataIncident } from 'src/app/interfaces/list-data';
import Swal from 'sweetalert2';
import { ListAgency, getListAgency } from './list-agency';
import { ListHotels, getListHotels } from './list-hotels';
import { ListLifeCenter, getListLifeCenter } from './list_life-center';

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

  enumAgency = [
    {
      name: 'CSC  Citelis Mobility ',
      value: '1',
    },
    {
      name: 'Mazda Morelia',
      value: '2',
    },
    {
      name: 'Mazda Uruapan',
      value: '3',
    },
    {
      name: 'Mazda LZD',
      value: '4',
    },
    {
      name: 'Mazda Zamora',
      value: '5',
    },
    {
      name: 'Mazda Coacalco',
      value: '6',
    },
    {
      name: 'Mazda Ecatepec',
      value: '7',
    },
    {
      name: 'Mazda SLP',
      value: '8',
    },
    {
      name: 'Mazda carretera 57 SLP.',
      value: '9',
    },
    {
      name: 'Mazda Carranza',
      value: '10',
    },
    {
      name: 'Ford Periodismo Morelia',
      value: '11',
    },
    {
      name: 'Ford Las Americas Morelia',
      value: '12',
    },
    {
      name: 'Ford Celaya',
      value: '13',
    },
    {
      name: 'Ford Queretaro',
      value: '14',
    },
    {
      name: 'Chirey Morelia',
      value: '15',
    },
    {
      name: 'Chirey Urupan',
      value: '16',
    },
    {
      name: 'JAC Morelia',
      value: '17',
    },
    {
      name: 'JAC León',
      value: '18',
    },
    {
      name: 'JAC Periferico Sur',
      value: '19',
    },
    {
      name: 'JAC SLP',
      value: '20',
    },
    {
      name: 'Omoda Escala Morelia',
      value: '21',
    },
    {
      name: 'Mercedes Benz Morelia',
      value: '22',
    },
    {
      name: 'Mercedes Benz Juriquilla',
      value: '23',
    },
    {
      name: 'Hino Morelia',
      value: '24',
    },
    {
      name: 'Hino Iztapalapa',
      value: '25',
    },
    {
      name: 'Jetour Morelia',
      value: '26',
    },
    {
      name: 'Jetour Querétaro',
      value: '27',
    },
  ];

  enumHotels = [
    { name: 'Holiday Inn', value: '1' },
    { name: 'Holiday inn express', value: '2' },
    { name: 'Holiday inn express', value: '3' },
  ];

  enumLifeCenter = [
    {
      value: '1',
      name: 'INMOBILIARIA',
    },
    {
      value: '2',
      name: 'CINEMATOGRAFIA',
    },
    {
      value: '3',
      name: 'DEL NORTE',
    },
    {
      value: '4',
      name: 'INMOBILIARIA CITELIS',
    },
    {
      value: '5',
      name: 'INMOBILIARIA Y COMERCIAL LAS AMERICAS',
    },
    {
      value: '6',
      name: 'PROMOTORA INMOBILIARI',
    },
    {
      value: '7',
      name: 'Y CONSTRUCTORA',
    },
    {
      value: '8',
      name: 'DE PLAZA MORELIA',
    },
    {
      value: '9',
      name: 'IMOBILIARIA',
    },
    {
      value: '10',
      name: 'CINEMATOGRAFICA',
    },
    {
      value: '11',
      name: 'OCCIDENTAL',
    },
    {
      value: '12',
      name: 'PROMOTORA INMOBILIARIA RESIDENCIAL MICHOACANA,    SA DE CV',
    },
  ];

  listDataAgency = getListAgency();
  listHotels = getListHotels();
  listLifeCenter = getListLifeCenter()
  agencySelected?: string;

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
    agency: new FormControl('', []),
    hotels: new FormControl('', []),
    lifeCenter: new FormControl('', []),
    businessLine: new FormControl('', []),
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

  getInfoAgency(): ListAgency | undefined {
    const id = this.form.get('agency')?.value;
    const item = this.listDataAgency.find((it) => it.id == id);
    if (id && item) {
      return item;
    } else {
      return undefined;
    }
  }

  getInfoHotel(): ListHotels | undefined {
    const id = this.form.get('hotels')?.value;
    const item = this.listHotels.find((it) => it.id == id);
    if (id && item) {
      return item;
    } else {
      return undefined;
    }
  }

  getInfoLifeCenter(): ListLifeCenter | undefined {
    const id = this.form.get('lifeCenter')?.value;
    const item = this.listLifeCenter.find((it) => it.id == id);
    if (id && item) {
      return item;
    } else {
      return undefined;
    }
  }
}
