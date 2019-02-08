import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageOtherComponent } from './page-other/page-other.component';

const routes: Routes = [
  { path: 'landing', component: PageLandingComponent },
  { path: 'other', component: PageOtherComponent },
  { path: '',
    redirectTo: '/landing',
    pathMatch: 'full'
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
