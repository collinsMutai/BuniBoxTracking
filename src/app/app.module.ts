import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';

import { TopNavComponent } from 'src/components/top-nav/top-nav.component';
import { MainNavComponent } from 'src/components/main-nav/main-nav.component';
import { LoginComponent } from 'src/components/login/login.component';
import { CctvComponent } from 'src/components/cctv/cctv.component';
import { LocationComponent } from 'src/components/location/location.component';
import { SeatsComponent } from 'src/components/seats/seats.component';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FooterComponent } from 'src/components/footer/footer.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    LoginComponent,
    CctvComponent,
    LocationComponent,
    SeatsComponent,
    DashboardComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
