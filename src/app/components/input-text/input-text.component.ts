import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input-text',
  templateUrl: './input-text.component.html',
  styleUrls: ['./input-text.component.scss']
})
export class InputTextComponent {
  @Input() parent!: FormGroup;
  @Input() label!: string;
  @Input() key!: string;
  @Input() type: string = 'text';
}
