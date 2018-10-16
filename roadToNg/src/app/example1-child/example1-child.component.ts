import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'exe-counter',
  templateUrl: './example1-child.component.html',
  styleUrls: ['./example1-child.component.css']
})
export class Example1ChildComponent implements OnInit {
  @Input() count:number;
  constructor() { }

  ngOnInit() {
  }
  increment():void{
    this.count++;
  }
  decrement():void{
    this.count--;
  }
}
