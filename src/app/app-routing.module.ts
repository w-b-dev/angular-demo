import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './Routes/page-not-found/page-not-found.component';
import { PageOtherComponent } from './Routes/page-other/page-other.component';

const routes: Routes = [
  {
    path: '',
    component: PageOtherComponent,
    data: {
      animationFor: 'public',
    },
  },
  {
    path: 'private',
    loadChildren: () => import('./Routes/page-landing/page-landing.module').then(m => m.PageLandingModule),
    data: {
      animationFor: 'private',
    },
  },
  {
    path: 'login',
    loadChildren: () => import('./Routes/page-login/page-login.module').then(m => m.PageLoginModule),
    data: {
      animationFor: 'login',
    },
  },
  {
    path: '**',
    component: PageNotFoundComponent,
    data: {
      animationFor: 'PageNotFoundComponent',
    },
  },
];

/*For feature modules, call the RouterModule.forChild method to register additional routes.*/
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule],
})
// @ts-ignore
export class AppRoutingModule {
}
