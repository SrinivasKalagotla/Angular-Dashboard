import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AttackerDetailsComponent } from './attacker-details/attacker-details.component';
import { AttackerListComponent } from './attacker-list/attacker-list.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  //{ path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', redirectTo: 'attacker', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  //{ path: 'dashboard', component: DashboardComponent },
  { path: 'attackers', component: AttackerListComponent },
  { path: 'details/:id', component: AttackerDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
