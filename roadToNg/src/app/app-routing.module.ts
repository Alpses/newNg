import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StartComponent } from './start/start.component' ;
import { MenuComponent } from './menu/menu.component' ;
import { Example1Component } from './example1/example1.component';
import { Example2Component } from './example2/example2.component';
import { Example3Component } from './example3/example3.component';

const routes: Routes = [
  { path:'',redirectTo:'/example1',pathMatch:'full' },
  { path:'helptostart',component:StartComponent },
  { path:'menu',component:MenuComponent },
  { path:'example1',component:Example1Component },
  { path:'example2',component:Example2Component },
  { path:'example3',component:Example3Component },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
