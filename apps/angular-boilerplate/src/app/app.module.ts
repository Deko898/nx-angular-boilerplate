import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgrxStoreModule } from '@nx-angular-boilerplate/store';
import { environment } from '../environments/environment';
import { SharedModule } from '@nx-angular-boilerplate/shared';
import { IconsModule } from '@nx-angular-boilerplate/icons';
import { interceptors } from '@nx-angular-boilerplate/core';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NgrxStoreModule.forParent(environment),
    SharedModule,
    IconsModule,
    AppRoutingModule,
  ],
  providers: [interceptors],
  bootstrap: [AppComponent],
})
export class AppModule {}
