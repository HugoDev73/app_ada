import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-incident',
  templateUrl: './new-incident.component.html',
  styleUrls: ['./new-incident.component.scss'],
})
export class NewIncidentComponent {
  options = [
    { name: 'New York', value: 'New York' },
    { name: 'Tokio', value: 'tokio' },
    { name: 'Paris', value: 'paris' },
  ];

  form = new FormGroup({
    city: new FormControl('', []),
    name: new FormControl('', []),
  });

  onSubmitForm() {
    console.log(this.form.value);
  }
}
