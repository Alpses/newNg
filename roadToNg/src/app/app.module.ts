import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';
import { Example1Component } from './example1/example1.component';
import { Example1ChildComponent } from './example1-child/example1-child.component';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MenuComponent,
    Example1Component,
    Example1ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
