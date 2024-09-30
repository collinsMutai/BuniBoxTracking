import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from 'src/components/dashboard/dashboard.component';
import { LoginComponent } from 'src/components/login/login.component';
import { CctvComponent } from 'src/components/cctv/cctv.component';
import { LocationComponent } from 'src/components/location/location.component';
import { SeatsComponent } from 'src/components/seats/seats.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'cctv', component: CctvComponent },
  { path: 'location', component: LocationComponent },
  { path: 'seats', component: SeatsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
