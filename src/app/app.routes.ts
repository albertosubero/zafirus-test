import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./heroes/heroes.page').then((m) => m.HeroesPage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'heroe-detail/:id',
    loadComponent: () => import('./heroe-detail/heroe-detail.page').then( m => m.HeroeDetailPage)
  },
];
