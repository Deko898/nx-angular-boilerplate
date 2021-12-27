import { createReducer, on } from '@ngrx/store';
import * as ErrorActions from './error.actions';

export const errorFeatureKey = 'error';

export interface ErrorState {
  code: number;
  message?: string;
}

export interface NgrxErrorState {
  readonly [errorFeatureKey]: ErrorState;
}

export const initialState: ErrorState = {
  code: -1,
};

export const errorReducer = createReducer(
  initialState,
  on(ErrorActions.throw401Error, (state, action) => ({
    code: action.error.status,
    message: action.error.message,
  })),
  on(ErrorActions.throw404Error, (state, action) => ({
    code: action.error.status,
    message: action.error.message,
  }))
);
