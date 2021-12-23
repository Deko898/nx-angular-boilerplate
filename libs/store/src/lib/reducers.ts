import { ActionReducerMap } from '@ngrx/store';
import { Form } from '@nx-angular-boilerplate/models';

import { formReducer } from './form/form.reducer';

export interface State {
  form: Form;
}

export const reducers: ActionReducerMap<State> = {
  form: formReducer,
};
