import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { ZhexiantouComponent } from './components/zhexiantou/zhexiantou.component';
import { LoginComponent } from './components/login/login.component'

const routes: Routes = [
 
  {path: 'home', component: HomeComponent},
  {path: 'zhexiantu', component: ZhexiantouComponent},
  {path: 'login', component: LoginComponent},
  
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
