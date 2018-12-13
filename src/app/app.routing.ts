import { ExtraOptions, PreloadAllModules, Routes } from '@angular/router';

export const ROOT_ROUTES: Routes = [
  {
    path: '',
    loadChildren: 'app/modules/layout/layout.module#LayoutModule'
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

export const ROOT_OPTIONS: ExtraOptions = {
  preloadingStrategy: PreloadAllModules,
  initialNavigation: 'enabled'
};
