import { ErrorEffects } from './error/error.effects';
import { FormEffects } from './form/form.effects';
import { RouterEffects } from './router/router.effects';

export const effects = [FormEffects, ErrorEffects, RouterEffects];
