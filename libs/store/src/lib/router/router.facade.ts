import { Injectable } from '@angular/core';
import { Params } from '@angular/router';

import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { RouterState } from './router.state';

import { routerQuery } from './router.selectors';

@Injectable({ providedIn: 'root' })
export class RouterFacade {
  state$ = this.store.pipe(select(routerQuery.getState));
  url$ = this.store.pipe(select(routerQuery.getUrl));
  queryParams$ = this.store.pipe(select(routerQuery.getQueryParams));
  params$: Observable<string | Params> = this.store.pipe(
    select(routerQuery.getParams)
  );

  constructor(private store: Store<RouterState>) {}
}
