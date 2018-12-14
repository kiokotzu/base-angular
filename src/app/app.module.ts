import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { INITIAL_STATE, StoreModule } from '@ngrx/store';

import { INITIAL_APPLICATION_STATE } from '@store/state/application.state';
import { environment as ENV } from '../environments/environment';
import { onAppInit, translateConfig } from './app.translate';
import { rootReducer } from '@store/reducers/root.reducer';
import { AppPreloadStrategy } from './app-preload-strategy';
import { AppRoutingModule } from './app-routing.module';
import { AuthModule } from '@modules/auth/auth.module';
import { AppComponent } from './app.component';
import { CoreModule } from '@core/core.module';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CoreModule,
    AuthModule,
    TranslateModule.forRoot(translateConfig),
    StoreModule.forRoot(REDUCER_TOKEN),
    !ENV.production ? StoreDevtoolsModule.instrument({  maxAge: 5 }) : []
  ],
  providers: [
    AppPreloadStrategy,
    {
      provide: APP_INITIALIZER,
      useFactory: onAppInit,
      multi: true,
      deps: [
        HttpClient,
        TranslateService
      ]
    },
    {
      provide: INITIAL_STATE,
      useValue: INITIAL_APPLICATION_STATE
    },
    {
      provide: REDUCER_TOKEN,
      useValue: rootReducer
    }
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
