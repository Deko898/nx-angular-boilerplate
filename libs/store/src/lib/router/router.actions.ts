import { createAction, props } from '@ngrx/store';
import { NgrxRoute } from './router.state';

export const go = createAction('[ROUTER] Go', props<{ to: NgrxRoute }>());
export const back = createAction('[ROUTER] BACK');
export const forward = createAction('[ROUTER] FORWARD');
