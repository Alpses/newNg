import { Component, OnInit,Input,SimpleChanges, OnChanges,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'exe-counter',
  templateUrl: './example1-child.component.html',
  styleUrls: ['./example1-child.component.css']
})
export class Example1ChildComponent  {
 
  @Input() count:number;
  constructor() { }
  
  increment():void{
    this.count++;
  }
  decrement():void{
    this.count--;
  }
  ngOnChanges(changes: SimpleChanges) {
    console.dir(changes['count']);
  }
/* 
_count: number = 0; // 默认:私有属性以下划线开头，不是必须也可以使用$count
biggerThanTen: boolean = false;

@Input()
set count (num: number) {
    this.biggerThanTen = num > 10;
    this._count = num;
}

get count(): number {
    return this._count;
}

increment() {
    this.count++;
}

decrement() {
    this.count--;
}
*/

  @Input() val:number;
  @Output() change: EventEmitter<number> = new EventEmitter<number>();

  high() {
    this.val++;
    this.change.emit(this.val);
  }

  low() {
    this.val--;
    this.change.emit(this.val);
  }
}
