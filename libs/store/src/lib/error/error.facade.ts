import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { NgrxErrorState } from './error.reducer';
import * as ErrorActions from './error.actions';

@Injectable({
  providedIn: 'root',
})
export class ErrorFacade {
  constructor(private store: Store<NgrxErrorState>) {}

  throw401Error(error: HttpErrorResponse) {
    this.store.dispatch(ErrorActions.throw401Error({ error }));
  }

  throw404Error(error: HttpErrorResponse) {
    this.store.dispatch(ErrorActions.throw404Error({ error }));
  }
}
