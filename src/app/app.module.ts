import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RegistrationComponent} from './pages/registration/registration.component';
import {HomeComponent} from './pages/home/home.component';
import {HeaderComponent} from './shared/header.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HomeComponent,
    HeaderComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
