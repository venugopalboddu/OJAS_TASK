import { LoadingComponent } from './loading/loading.component';
import { DashboardComponent } from './index/dashboard/dashboard.component';
import { LoginComponent } from './index/login/login.component';
import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './index/register/register.component';
import { IndexModule } from './index/index.module';
import { AuthgGuard } from './authg.guard';
import { Auth1Service } from './auth1.service';


const routes: Routes = [

  { path: '', redirectTo: 'load', pathMatch: 'full', canActivate: [AuthgGuard] },
  {path: 'load', component: LoadingComponent},
  {path: '', loadChildren: () => import('./index/index.module').then(m => m.IndexModule)}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule, IndexModule]
})
export class AppRoutingModule { }
