import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@nx-angular-boilerplate/models';

@Component({
  selector: 'nx-angular-boilerplate-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InputComponent {
  @Input() field!: Field;
  @Input() group!: FormGroup;

  get ctrl() {
    return this.group.get(this.field.name);
  }
}
