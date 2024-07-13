import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from 'src/components/home/home.component';
import { TopNavComponent } from 'src/components/top-nav/top-nav.component';
import { MainNavComponent } from 'src/components/main-nav/main-nav.component';
import { LoginComponent } from 'src/components/login/login.component';
import { RouterModule } from '@angular/router';
import { CctvComponent } from 'src/components/cctv/cctv.component';

import { LocationComponent } from 'src/components/location/location.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopNavComponent,
    MainNavComponent,
    LoginComponent,
    CctvComponent,
   LocationComponent
  ],
  imports: [BrowserModule, AppRoutingModule, RouterModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
