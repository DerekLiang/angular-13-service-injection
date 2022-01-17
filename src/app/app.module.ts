import { environment } from './../environments/environment';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { API_BASE_URL } from 'src/environments/token-def';
import { HeroService, HeroServiceBase } from 'src/environments/service-a';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: (url: any, s: any) => () => Promise.resolve(url),
      multi: true,
      deps: [API_BASE_URL, HeroServiceBase],
    },

    environment.providers,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
