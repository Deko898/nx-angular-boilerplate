import {
  ModuleWithProviders,
  NgModule,
  Optional,
  SkipSelf,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import {
  NavigationActionTiming,
  StoreRouterConnectingModule,
} from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppEnviorment } from '@nx-angular-boilerplate/models';
import { reducers } from './reducers';
import { effects } from './effects';
import { ngrxRouterFeatureKey } from './router/router.state';
import { RouterSerializer } from './router/custom-serializer';
import { RouterFacade } from './router/router.facade';

@NgModule({
  imports: [CommonModule],
})
export class NgrxStoreModule {
  constructor(@Optional() @SkipSelf() parentModule: NgrxStoreModule) {
    if (parentModule) {
      throw new Error('StoreModule is already loaded.');
    }
  }

  static forParent(
    environment: AppEnviorment
  ): (any[] | ModuleWithProviders<any>)[] {
    return [
      StoreModule.forRoot(reducers),
      EffectsModule.forRoot(effects),
      StoreRouterConnectingModule.forRoot({
        stateKey: ngrxRouterFeatureKey,
        serializer: RouterSerializer,
        navigationActionTiming: NavigationActionTiming.PostActivation,
      }),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      {
        ngModule: NgrxStoreModule,
        providers: [RouterFacade],
      },
    ];
  }
}
