import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageLandingRoutingModule } from './page-landing-routing.module';
import { PageLandingComponent } from './page-landing.component';

@NgModule({
  declarations: [PageLandingComponent],
  imports: [
    CommonModule,
    PageLandingRoutingModule,
  ],
})
export class PageLandingModule {
}
