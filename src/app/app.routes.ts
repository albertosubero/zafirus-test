import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'heroes',
    loadComponent: () => import('./heroes/heroes.page').then((m) => m.HeroesPage),
  },
  {
    path: '',
    redirectTo: 'heroes',
    pathMatch: 'full',
  },
  {
    path: 'heroe-detail',
    loadComponent: () => import('./heroe-detail/heroe-detail.page').then( m => m.HeroeDetailPage)
  },
];
