import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from './Routes/page-landing/page-landing.component';
import { PageNotFoundComponent } from './Routes/page-not-found/page-not-found.component';

const routes: Routes = [
  {
    path: '',
    component: PageLandingComponent,
    data: {
      animationFor: 'public',
    },
  },
  {
    path: 'private',
    loadChildren: './Routes/page-other/page-other.module#PageOtherModule',
    data: {
      animationFor: 'private',
    },
  },
  {
    path: 'login',
    loadChildren: './Routes/page-login/page-login.module#PageLoginModule',
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
    RouterModule.forRoot(routes,
      // <-- debugging purposes only
      // { enableTracing: true },
    ),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
