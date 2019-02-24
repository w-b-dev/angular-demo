import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { PageLandingComponent } from './page-landing/page-landing.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PageOtherComponent } from './page-other/page-other.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageLandingComponent,
    PageOtherComponent,
    NavigationComponent,
    PageLoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
