// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OccupancyComponent } from 'src/components/dashboard/occupancy.component';
import { LoginComponent } from 'src/components/login/login.component';
import { CctvComponent } from 'src/components/cctv/cctv.component';
import { LocationComponent } from 'src/components/location/location.component';
import { SeatsComponent } from 'src/components/seats/seats.component';
import { SidebarComponent } from 'src/components/sidebar/sidebar.component';

import { AuthGuard } from './auth.guard';
import { BuslistComponent } from 'src/components/buslist/buslist.component';
import { ChartComponent } from 'src/components/chart/chart.component';
import { AboutUsComponent } from 'src/components/about-us/about-us.component';
import { ServicesComponent } from 'src/components/our-services/services.component';
import { ContactUsComponent } from 'src/components/contact-us/contact-us.component';
import { HomeComponent } from '../components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: OccupancyComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'buslist',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'about-us',
        component: AboutUsComponent,
      },
      {
        path: 'our-services',
        component: ServicesComponent,
      },
      {
        path: 'contact-us',
        component: ContactUsComponent,
      },
      {
        path: 'buslist',
        component: BuslistComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'dashboard',
        component: ChartComponent,
        canActivate: [AuthGuard],
      },
      {
        path: 'occupancy/:id',
        component: OccupancyComponent,
        canActivate: [AuthGuard],
      },
      { path: 'cctv', component: CctvComponent, canActivate: [AuthGuard] },

      {
        path: 'location',
        component: LocationComponent,
        canActivate: [AuthGuard],
      },
      { path: 'seats', component: SeatsComponent, canActivate: [AuthGuard] },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
