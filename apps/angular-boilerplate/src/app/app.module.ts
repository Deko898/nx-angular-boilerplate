import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { NgrxStoreModule } from '@nx-angular-boilerplate/store';
import { environment } from '../environments/environment';
import { SharedModule } from '@nx-angular-boilerplate/shared';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgrxStoreModule.forParent(environment),
    SharedModule,
    RouterModule.forRoot(
      [
        {
          path: '',
          loadChildren: () =>
            import('@nx-angular-boilerplate/auth').then((m) => m.AuthModule),
        }
      ],
      {
        initialNavigation: 'enabled',
        useHash: true,
        relativeLinkResolution: 'legacy',
      },
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
