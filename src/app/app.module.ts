import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { APP_INITIALIZER, InjectionToken, NgModule } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { BrowserModule } from '@angular/platform-browser';
import { INITIAL_STATE, StoreModule } from '@ngrx/store';
import { tap } from 'rxjs/operators';

import { INITIAL_APPLICATION_STATE } from './store/state/application.state';
import { environment as ENV } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { rootReducer } from './store/reducers/root.reducer';
import { AppPreloadStrategy } from './app-preload-strategy';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

export const REDUCER_TOKEN = new InjectionToken('Registered Reducers');


export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

const translateConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot(translateConfig),
    StoreModule.forRoot(REDUCER_TOKEN),
    ENV.production ? StoreDevtoolsModule.instrument({  maxAge: 5 }) : []
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

export function onAppInit(http: HttpClient, translate: TranslateService): () => Promise<any> {
  return (): Promise<any> => {
    return http.get('/assets/i18n/' + ENV.languages.es + '.json').pipe(
      tap(() => {
        const defaultLang = ENV.languages.es;
        translate.setDefaultLang(defaultLang);
      })
    ).toPromise();
  };
}
