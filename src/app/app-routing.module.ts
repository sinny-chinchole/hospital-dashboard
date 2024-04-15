import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { CompareAccountsComponent } from './compare-accounts/compare-accounts.component';
import { CompareResultsComponent } from './compare-results/compare-results.component';
import { CaComponent } from './ca/ca.component';
const routes: Routes = [

  { path: '', component:HomeComponent},
  { path: 'header', component: HeaderComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'accounts', component: CompareAccountsComponent},
  { path: 'results', component: CompareResultsComponent},
  { path: 'ca', component: CaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
