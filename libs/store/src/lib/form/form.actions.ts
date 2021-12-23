import { createAction, props } from '@ngrx/store';
import { FieldErrors } from '@nx-angular-boilerplate/models';

export const setData = createAction('[Form] SET_DATA', props<{ data: any }>());
export const updateData = createAction(
  '[Form] UPDATE_DATA',
  props<{ data: any }>()
);
export const setStructure = createAction(
  '[Form] SET_STRUCTURE',
  props<{ structure: any }>()
);
export const setErrors = createAction(
  '[Form] SET_ERRORS',
  props<{ errors: FieldErrors }>()
);
export const initializeErrors = createAction('[Form] INITIALIZE_ERRORS');
export const initializeForm = createAction('[Form] INITIALIZE_FORM');
export const resetForm = createAction('[Form] RESET_FORM');
