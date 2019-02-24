import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageOtherComponent } from './page-other/page-other.component';

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
    component: PageOtherComponent,
    data: {
      animationFor: 'private',
    },
  },
  {
    path: 'login',
    component: PageLoginComponent,
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
  // <-- debugging purposes only
  imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
