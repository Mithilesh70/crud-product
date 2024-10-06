import { Route } from '@angular/router';
import { LayoutComponent } from './layout.component';

export const LAYOUT_ROUTES: Route[] = [
  {
    path: '',
    component: LayoutComponent,

    children: [
      {
        path: '',
        redirectTo: 'products',
        pathMatch: 'full',
      },
      {
        path: 'products',
        loadComponent: () =>
          import('../component/product/product-list/product-list.component'),
      },
      {
        path: 'error',
        loadComponent: () => import('../component/error/error.component'),
      },
      {
        path: '**',
        redirectTo: 'error',
      },
    ],
  },
];
