import { Params, NavigationExtras } from '@angular/router';
import * as fromRouter from '@ngrx/router-store';
import { RouterReducerState } from '@ngrx/router-store';

export const ngrxRouterFeatureKey = 'router';

export interface RouterStateUrl {
  url: string;
  queryParams: Params;
  params: Params;
}

export interface RouterState {
  readonly [ngrxRouterFeatureKey]: fromRouter.RouterReducerState<RouterStateUrl>;
}

export interface NgrxRoute {
  path: any[];
  query?: object;
  extras?: NavigationExtras;
}

export interface State {
  navigationId: number;
  state: RouterStateUrl;
}

export type RouterStateType = RouterReducerState<RouterStateUrl>;
