import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map } from 'rxjs/operators';
import * as FormActions from './form.actions';

@Injectable()
export class FormEffects {

  setData$ = createEffect(() =>
    this.actions$.pipe(
      ofType(FormActions.setData, FormActions.updateData),
      map(() => FormActions.initializeErrors()),
    ),
  );

  constructor(private actions$: Actions) { }

}
