import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageOtherComponent } from './page-other/page-other.component';

const routes: Routes = [
  {
    path: 'landing',
    component: PageLandingComponent,
    data: {
      animationFor: 'A-PageLandingComponent'
    },
  },
  {
    path: 'other',
    component: PageOtherComponent,
    data: {
      animationFor: 'B-PageOtherComponent'
    },
  },
  {
    path: '',
    redirectTo: '/landing',
    pathMatch: 'full',
  },
  { path: '**', component: PageNotFoundComponent },
];

/*For feature modules, call the RouterModule.forChild method to register additional routes.*/
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
