import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Form } from '@nx-angular-boilerplate/models';
import * as fromForm from './form.reducer';

export const selectFormState = createFeatureSelector<Form>(
  fromForm.formFeatureKey
);

export const getStructure = createSelector(selectFormState, (state: Form) => state.structure);
export const getData = createSelector(selectFormState, (state: Form) => state.data);
export const isValid = createSelector(selectFormState, (state: Form) => state.valid);
export const getErrors = createSelector(selectFormState, (state: Form) => state.errors);
export const getTouchedForm = createSelector(selectFormState, (state: Form) => state.touched);

export const formsQuery = {
  getStructure,
  getData,
  isValid,
  getErrors,
  getTouchedForm
};
