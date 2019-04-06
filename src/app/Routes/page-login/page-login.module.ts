import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PageLoginRoutingModule } from './page-login-routing.module';
import { PageLoginComponent } from './page-login.component';

@NgModule({
  declarations: [PageLoginComponent],
  imports: [
    CommonModule,
    PageLoginRoutingModule,
  ],
})
export class PageLoginModule {
}
