import { Component, OnInit, ChangeDetectionStrategy, OnDestroy } from '@angular/core';
import { Validators } from '@angular/forms';
import { Field, FieldInputType } from '@nx-angular-boilerplate/models';
import { FormFacade } from '@nx-angular-boilerplate/store';
import { Observable, of } from 'rxjs';

const structure: Field[] = [
  {
    type: FieldInputType.INPUT,
    name: 'email',
    placeholder: 'Email',
    label: 'Email',
    validator: [Validators.required, Validators.email],
    attrs: {
      type: 'email',
    },
  },
  {
    type: FieldInputType.INPUT,
    name: 'password',
    placeholder: 'Password',
    label: 'Password',
    validator: [Validators.required],
    attrs: {
      type: 'password',
    },
  },
  {
    type: FieldInputType.TEXTAREA,
    name: 'TEXTAREA',
    placeholder: 'TEXTAREA',
    label: 'TEXTAREA'
  },
];

@Component({
  selector: 'nx-angular-boilerplate-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LoginComponent implements OnInit, OnDestroy {
  structure$: Observable<Field[]> = this.formFacade.data$;
  data$: Observable<any> = this.formFacade.structure$;

  constructor(private formFacade: FormFacade) { }

  ngOnInit(): void {
    this.formFacade.setStructure(structure);
  }

  updateForm(changes: any) {
    this.formFacade.updateData(changes);
  }

  submit() {
    // this.facade.login();
  }

  ngOnDestroy() {
    this.formFacade.initializeForm();
  }
}
