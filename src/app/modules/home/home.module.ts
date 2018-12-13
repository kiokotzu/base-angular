import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeContainerComponent } from './home.container.component';
import { HomeRoutingModule } from './home-routing.module';
import { CoreModule } from '@core/core.module';

@NgModule({
  declarations: [
    HomeContainerComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    CoreModule
  ]
})
export class HomeModule { }
