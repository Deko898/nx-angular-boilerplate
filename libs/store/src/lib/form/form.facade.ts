import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { FormState } from './form.reducer';
import { formsQuery } from './form.selectors';
import * as NgrxFormsActions from './form.actions';

@Injectable({
    providedIn: 'root'
})
export class FormFacade {
    data$ = this.store.select(formsQuery.getData);
    structure$ = this.store.select(formsQuery.getStructure);
    errors$ = this.store.select(formsQuery.getErrors);
    touched$ = this.store.select(formsQuery.getTouchedForm);

    constructor(private store: Store<FormState>) { }

    setStructure(structure: any) {
        this.store.dispatch(NgrxFormsActions.setStructure({ structure }));
    }

    setData(data: any) {
        this.store.dispatch(NgrxFormsActions.setData({ data }));
    }

    updateData(data: any) {
        this.store.dispatch(NgrxFormsActions.updateData({ data }));
    }

    initializeForm() {
        this.store.dispatch(NgrxFormsActions.initializeForm());
    }

    initializeErrors() {
        this.store.dispatch(NgrxFormsActions.initializeErrors());
    }

    resetForm() {
        this.store.dispatch(NgrxFormsActions.resetForm());
    }
}
