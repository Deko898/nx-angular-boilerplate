import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';

import { map } from 'rxjs/operators';
import { go } from '../router/router.actions';

import * as ErrorActions from './error.actions';

@Injectable()
export class ErrorEffects {
  error401$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ErrorActions.throw401Error),
      map((_) => go({ to: { path: ['/login'] } }))
    )
  );

  error404$ = createEffect(() =>
    this.actions$.pipe(
      ofType(ErrorActions.throw404Error),
      map((_) => go({ to: { path: ['/'] } }))
    )
  );

  // TODO: HANDLE ERRORS AND DISPLAY TOASTR

  constructor(private actions$: Actions) {}
}
