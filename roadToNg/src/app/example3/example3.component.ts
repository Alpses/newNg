import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-example3',
  templateUrl: './example3.component.html',
  styleUrls: ['./example3.component.css']
})
export class Example3Component implements OnInit {
  private initialCount:number = 8 ;
  private changedMsg:string ;
  constructor() { }

  ngOnInit() {
  }
  countChange(event){
    console.log('event:',event);
    this.changedMsg = `change事件已经触发：${event}` ;
  }
}
