/**
 *
 * @author Adrian Duardo Yanes
 * @license Private
 */

import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.routes').then((m) => m.routes),
  // },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
];
