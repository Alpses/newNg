import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component' ;
import { MenuComponent } from './menu/menu.component' ;
import { Example1Component } from './example1/example1.component';
const routes: Routes = [
  { path:'',redirectTo:'/example1',pathMatch:'full' },
  { path:'helptostart',component:StartComponent },
  { path:'menu',component:MenuComponent },
  { path:'example1',component:Example1Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
