import { Component, OnInit, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-example3-child',
  templateUrl: './example3-child.component.html',
  styleUrls: ['./example3-child.component.css']
})
export class Example3ChildComponent implements OnInit {

  @Input() count:number = 0 ;
  @Output() catchChange:EventEmitter<number> = new EventEmitter<number>() ;
  constructor() { }

  ngOnInit() {
  }
  addOne(){
    this.count++ ;
    this.catchChange.emit(this.count);
  }
  reduceOne(){
    this.count-- ;
    this.catchChange.emit(this.count);
  }
}
