import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
/* Current suer */
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AnimeDetailsComponent } from './anime-details/anime-details.component';
import { AnimeWatchingComponent } from './anime-watching/anime-watching.component';
import { AnimeWatchEpComponent } from './anime-serverEp/anime-watch-ep/anime-watch-ep.component';
import { SearchComponent } from './search/search.component';
import {  UserDashboardComponent } from './user-dashboard/user-dashboard.component';

import { GuardsGuard } from './protectd/guards.guard';


const routes: Routes = [
  /* Current User */
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'anime/:id/:title',component:AnimeDetailsComponent},
  {path:'ver/:id',component:AnimeWatchingComponent},
  {path:'verEp/:id/:title/:ep',component:AnimeWatchEpComponent},
  {path:'busqueda/:title',component:SearchComponent},
  {path:'dashUser/:id/:title',component:UserDashboardComponent,
  canActivate:[GuardsGuard]},
  {path:'dashUser',component:UserDashboardComponent,
  canActivate:[GuardsGuard]},
  {path:'moverUser/:user',component:UserDashboardComponent,
  canActivate:[GuardsGuard]},
  {path:'',pathMatch:'full',redirectTo:'home'},
  {path: '**', pathMatch:'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
