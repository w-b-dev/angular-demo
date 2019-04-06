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
import { PageNotFoundComponent } from './Routes/page-not-found/page-not-found.component';

// Import the minimal amount of isolated components here
@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    PageLandingComponent,
    NavigationComponent,
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
