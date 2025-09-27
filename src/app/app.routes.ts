import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accueil',
    loadComponent: () =>
      import('./accueil/accueil.component').then((m) => m.AccueilComponent),
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
];
