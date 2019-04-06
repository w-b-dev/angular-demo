import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageOtherRoutingModule } from './page-other-routing.module';
import { PageOtherComponent } from './page-other.component';

@NgModule({
  declarations: [PageOtherComponent],
  imports: [
    CommonModule,
    PageOtherRoutingModule,
  ],
})
export class PageOtherModule {
}
