import { Routes } from '@angular/router';
import { LoginComponent } from './modules/auth/login/login.component';

export const ROUTES: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    loadChildren: './modules/layout/layout.module#LayoutModule'
  },
  {
    path: '**',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule',
    data: { preload: true }
  }
];
