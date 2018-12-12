import { Routes } from '@angular/router';

export const ROUTES: Routes = [
  {
    path: '**',
    loadChildren: './modules/not-found/not-found.module#NotFoundModule',
    data: {preload: true}
  }
];
