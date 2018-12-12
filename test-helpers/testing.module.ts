import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    RouterTestingModule,
    TranslateModule.forRoot()
  ],
  exports: [
    TranslateModule
  ]
})
export class TestingModule {

}
