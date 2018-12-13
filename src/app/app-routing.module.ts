import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ROOT_OPTIONS, ROOT_ROUTES } from './app.routing';

@NgModule({
  imports: [
    RouterModule.forRoot(ROOT_ROUTES, ROOT_OPTIONS)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {
}
