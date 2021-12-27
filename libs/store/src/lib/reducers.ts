import { routerReducer } from '@ngrx/router-store';
import { ActionReducerMap } from '@ngrx/store';
import { Form } from '@nx-angular-boilerplate/models';
import { errorReducer, ErrorState } from './error/error.reducer';

import { formReducer } from './form/form.reducer';
import { RouterStateType } from './router/router.state';

export interface State {
  form: Form;
  error: ErrorState;
  router: RouterStateType;
}

export const reducers: ActionReducerMap<State> = {
  form: formReducer,
  error: errorReducer,
  router: routerReducer,
};
