import { Routes } from '@angular/router';
import { Layout } from '@shared/layouts/layout/internal-layout';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    loadComponent: () => import('@features/login/login'),
  },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: 'home',
        loadComponent: () => import('@features/home/presentation/page/home'),
      },

    ],
  }
];
