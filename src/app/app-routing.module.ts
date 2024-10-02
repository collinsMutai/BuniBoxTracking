// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { CctvComponent } from 'src/components/cctv/cctv.component';
import { LocationComponent } from 'src/components/location/location.component';
import { SeatsComponent } from 'src/components/seats/seats.component';
import { AuthGuard } from './auth.guard'; // Adjust the import path as necessary

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthGuard],
  },
  { path: 'cctv', component: CctvComponent, canActivate: [AuthGuard] },
  { path: 'location', component: LocationComponent, canActivate: [AuthGuard] },
  { path: 'seats', component: SeatsComponent, canActivate: [AuthGuard] },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
