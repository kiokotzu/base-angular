import { TranslateLoader, TranslateService } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';

import { environment as ENV } from '../environments/environment';

export function createTranslateLoader(http: HttpClient): TranslateHttpLoader {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export const translateConfig = {
  loader: {
    provide: TranslateLoader,
    useFactory: (createTranslateLoader),
    deps: [HttpClient]
  }
};

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
