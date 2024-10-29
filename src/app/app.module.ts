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
import { OccupancyComponent } from 'src/components/dashboard/occupancy.component';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { FooterComponent } from 'src/components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';
import { BuslistComponent } from 'src/components/buslist/buslist.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { ServicesComponent } from 'src/components/our-services/services.component';
import { ContactUsComponent } from 'src/components/contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavComponent,
    MainNavComponent,
    LoginComponent,
    CctvComponent,
    LocationComponent,
    SeatsComponent,
    OccupancyComponent,
    FooterComponent,
    SidebarComponent,
    BuslistComponent,
    AboutUsComponent,
    ServicesComponent,
    ContactUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    CommonModule,
    TooltipModule.forRoot(),
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
