import { createReducer, on } from '@ngrx/store';
import { Form } from '@nx-angular-boilerplate/models';
import * as FormActions from './form.actions';

export const formFeatureKey = 'form';

export interface FormState {
  readonly [formFeatureKey]: Form;
}

export const initialState: Form = {
  data: {},
  structure: [],
  valid: true,
  errors: {},
  touched: false
};


export const formReducer = createReducer(
  initialState,
  on(FormActions.setData, (state, action) => ({ ...state, data: action.data })),
  on(FormActions.updateData, (state, action) => {
    const data = { ...state.data, ...action.data };
    return { ...state, data, touched: true };
  }),
  on(FormActions.setStructure, (state, action) => ({ ...state, structure: action.structure.slice(0) })),
  on(FormActions.setErrors, (state, action) => ({ ...state, errors: action.errors })),
  on(FormActions.initializeErrors, (state) => ({ ...state, errors: {} })),
  on(FormActions.initializeForm, () => initialState),
  on(FormActions.resetForm, (state) => ({ ...state, touched: false })),
);

// export function ngrxFormsReducer(state: NgrxForms | undefined, action: Action): NgrxForms {
//   return reducer(state, action);
// }