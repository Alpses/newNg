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
      {id:1,name:'component00',desc:'Angular ViewEncapsulation Modes',roadto:''},
      {id:2,name:'component01',desc:'',roadto:'/example1'},
      {id:3,name:'component02',desc:'',roadto:'/example2'},
      {id:4,name:'component03',desc:'',roadto:'/example3'},
      {id:5,name:'component04',desc:'',roadto:'/example4'}
    ]
  }

}
