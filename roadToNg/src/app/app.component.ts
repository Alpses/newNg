import { Component } from '@angular/core';


import { Course } from './course'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {


  private roads : Course[] ;
  constructor() { 
    this.roads=[
      {id:1,name:'component01',desc:'Angular ViewEncapsulation Modes'},
      {id:2,name:'component02',}
    ]
  }

}
