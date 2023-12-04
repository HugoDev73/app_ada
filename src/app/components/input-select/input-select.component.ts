import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ISelectOption } from 'src/app/interfaces/select';



@Component({
  selector: 'app-input-select',
  templateUrl: './input-select.component.html',
  styleUrls: ['./input-select.component.scss']
})
export class InputSelectComponent {
  @Input() parent!: FormGroup;
  @Input() label!: string;
  @Input() key!: string;
  @Input() options!: ISelectOption[];

  constructor() {}

}
