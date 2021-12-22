import { ComponentRef, Directive, Input, OnChanges, OnInit, Type, ViewContainerRef } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Field } from '@nx-angular-boilerplate/models';
import { InputComponent } from './fields/input/input.component';
import { TextareaComponent } from './fields/textarea/textarea.component';

const componentsMapper: { [key: string]: Type<any> } = {
  INPUT: InputComponent,
  TEXTAREA: TextareaComponent,
};

@Directive({
  selector: '[nxAngularBoilerplateDynamicField]'
})
export class DynamicFieldDirective implements OnInit, OnChanges {
  @Input() field!: Field;
  @Input() group!: FormGroup;
  component!: ComponentRef<InputComponent | TextareaComponent>;

  constructor(private viewContainerRef: ViewContainerRef) { }

  ngOnChanges() {
    if (this.component) {
      this.component.instance.field = this.field;
      this.component.instance.group = this.group;
    }
  }

  ngOnInit() {
    this.component = this.viewContainerRef.createComponent<InputComponent | TextareaComponent>(componentsMapper[this.field.type]);
    this.component.instance.field = this.field;
    this.component.instance.group = this.group;
  }

}
