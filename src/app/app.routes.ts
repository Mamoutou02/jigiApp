import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'accueil',
    loadComponent: () =>
      import('./accueil/accueil.component').then((m) => m.AccueilComponent),
  },
  {
    path: 'confirmationPaiement',
    loadComponent: () =>
      import('./confirmation-paiement/confirmation-paiement.component').then((m) => m.ConfirmationPaiementComponent),
  },
  {
    path: 'depenses',
    loadComponent: () =>
      import('./depenses/depenses.component').then((m) => m.DepensesComponent),
  },
  {
    path: 'ecole-info',
    loadComponent: () =>
      import('./ecole-info/ecole-info.component').then((m) => m.EcoleInfoComponent),
  },
  {
    path: 'paiement',
    loadComponent: () =>
      import('./paiement/paiement.component').then((m) => m.PaiementComponent),
  },
  // {
  //   path: 'parrains',
  //   loadComponent: () =>
  //     import('./parrains/parrains.component').then((m) => m.ParrainsComponent),
  // },
  {
    path: 'profil',
    loadComponent: () =>
      import('./profil/profil.component').then((m) => m.ProfilComponent),
  },
  {
    path: 'rapport',
    loadComponent: () =>
      import('./rapport/rapport.component').then((m) => m.RapportComponent),
  },
  {
    path: 'list-presence',
    loadComponent: () =>
      import('./list-presence/list-presence.component').then((m) => m.ListPresenceComponent),
  },
  {
    path: 'notification',
    loadComponent: () =>
      import('./notification/notification.component').then((m) => m.NotificationComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('./login/login.component').then((m) => m.LoginComponent),
  },
  {
    path: '',
    redirectTo: 'accueil',
    pathMatch: 'full',
  },
  // {
  //   path: 'onboarding',
  //   loadComponent: () =>
  //     import('./onboarding/onboarding.component').then(m => m.OnboardingComponent),
  // },
];
