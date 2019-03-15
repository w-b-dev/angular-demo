import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationComponent } from './Features/navigation/navigation.component';
import { PageLandingComponent } from './Routes/page-landing/page-landing.component';
import { PageLoginComponent } from './Routes/page-login/page-login.component';
import { PageNotFoundComponent } from './Routes/page-not-found/page-not-found.component';
import { PageOtherComponent } from './Routes/page-other/page-other.component';

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
    HttpClientModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
}
