import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Form } from '@nx-angular-boilerplate/models';
import * as fromForm from './form.reducer';

export const selectFormState = createFeatureSelector<Form>(fromForm.formFeatureKey);

export const selectStructure = createSelector(
  selectFormState,
  (state: Form) => state.structure
);
export const selectData = createSelector(selectFormState, (state: Form) => state.data);
export const selectIsValid = createSelector(
  selectFormState,
  (state: Form) => state.valid
);
export const selectErrors = createSelector(
  selectFormState,
  (state: Form) => state.errors
);
export const selectTouchedForm = createSelector(
  selectFormState,
  (state: Form) => state.touched
);

export const formsQuery = {
  selectStructure,
  selectData,
  selectIsValid,
  selectErrors,
  selectTouchedForm,
};
