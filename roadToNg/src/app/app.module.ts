import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartComponent } from './start/start.component';
import { MenuComponent } from './menu/menu.component';
import { Example1Component } from './example1/example1.component';
import { Example1ChildComponent } from './example1-child/example1-child.component';
import { Example2Component } from './example2/example2.component';
import { Example2ChildComponent } from './example2-child/example2-child.component';
import { Example3Component } from './example3/example3.component';
import { Example3ChildComponent } from './example3-child/example3-child.component';
import { Example4Component } from './example4/example4.component';
import { Example4SimplePaginationComponent } from './example4-simple-pagination/example4-simple-pagination.component';
import { OrdinalPipe } from './ordinal.pipe';

@NgModule({
  declarations: [
    AppComponent,
    StartComponent,
    MenuComponent,
    Example1Component,
    Example1ChildComponent,
    Example2Component,
    Example2ChildComponent,
    Example3Component,
    Example3ChildComponent,
    Example4Component,
    Example4SimplePaginationComponent,
    OrdinalPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
