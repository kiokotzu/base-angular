import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ROUTES } from './app.routes';
import { AppPreloadStrategy } from './app-preload-strategy';

@NgModule({
  imports: [RouterModule.forRoot(ROUTES, {
    preloadingStrategy: AppPreloadStrategy,
    initialNavigation: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
