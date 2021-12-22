import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Field } from '@nx-angular-boilerplate/models';
import { DestroyService } from '@nx-angular-boilerplate/core';
import { combineLatest, debounceTime, filter, map, Observable, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'nx-angular-boilerplate-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [DestroyService]
})
export class DynamicFormComponent implements OnInit {
  @Input() structure$!: Observable<Field[]>;
  @Input() data$!: Observable<any>;
  @Input() touchedForm$!: Observable<boolean>;
  @Output() updateForm: EventEmitter<any> = new EventEmitter();
  form!: FormGroup;

  constructor(
    @Inject(DestroyService) private readonly destroy$: Subject<void>,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.structure$
      .pipe(
        map(this.formBuilder),
        tap(f => (this.form = f)),
        tap(f => this.listenFormChanges(f)),
        f$ => combineLatest([f$, this.data$]),
        takeUntil(this.destroy$),
      )
      .subscribe(this.patchValue);

    if (this.touchedForm$) {
      this.touchedForm$
        .pipe(
          filter(t => !t && !!this.form),
          takeUntil(this.destroy$),
        )
        .subscribe(_ => this.form.reset());
    }
  }

  private formBuilder = (structure: Field[]): FormGroup => {
    const group = this.fb.group({});
    structure.forEach(field => group.addControl(field.name, this.control(field)));
    return group;
  };

  private control = (field: Field): FormControl => {
    return this.fb.control('', field.validator);
  };

  private patchValue = ([form, data]: [FormGroup, any]) => {
    data ? form.patchValue(data, { emitEvent: false }) : form.patchValue({}, { emitEvent: false });
  };

  private listenFormChanges(form: FormGroup) {
    form.valueChanges
      .pipe(
        debounceTime(100),
        takeUntil(this.destroy$),
      )
      .subscribe(changes => this.updateForm.emit(changes));
  }
}
