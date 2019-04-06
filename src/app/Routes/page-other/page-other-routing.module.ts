import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageOtherComponent } from './page-other.component';

const routes: Routes = [
  {
    path: '',
    component: PageOtherComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageOtherRoutingModule {
}
