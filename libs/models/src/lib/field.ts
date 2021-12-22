import { ValidatorFn } from "@angular/forms";

export interface Form {
    data: any;
    structure: Field[];
    valid: boolean;
    errors: FieldErrors;
    touched: boolean;
}

export interface Field {
    type: FieldType;
    name: string;
    label?: string;
    placeholder?: string;
    validator?: ValidatorFn[];
    attrs?: any;
}

export enum FieldInputType {
    INPUT = 'INPUT',
    TEXTAREA = 'TEXTAREA'
}

export type FieldType = FieldInputType.INPUT | FieldInputType.TEXTAREA;

export interface FieldErrors {
    [key: string]: string;
}