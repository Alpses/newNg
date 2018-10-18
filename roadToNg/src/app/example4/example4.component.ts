import { Component, OnInit } from '@angular/core';


import { OrdinalPipe } from '../ordinal.pipe' ;
@Component({
  selector: 'app-example4',
  styleUrls: ['./example4.component.css'],
  templateUrl: './example4.component.html',
  providers:[OrdinalPipe]
})
export class Example4Component implements OnInit {
  currentPage:number = 2 ;

  totalPage:number = 10 ;

  numbers:Array<number>;
  constructor(private pipe:OrdinalPipe) { 
    this.numbers = [
      1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20
    ]
   }

  ngOnInit() {
  }

}
