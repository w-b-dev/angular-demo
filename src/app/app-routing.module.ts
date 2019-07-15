import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MsalGuard } from '@azure/msal-angular';
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
    canActivate : [MsalGuard],
    loadChildren: './Routes/page-landing/page-landing.module#PageLandingModule',
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
// @ts-ignore
export class AppRoutingModule {
}
