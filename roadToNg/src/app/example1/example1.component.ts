import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  encapsulation:ViewEncapsulation.Emulated // None | Emulated | Native
})
export class Example1Component implements OnInit {
  initialCount: number = 5;

  initialCalculate: number = 15;
  changeMsg: string;
  calculateChange(event: number) {
    this.changeMsg = `子组件change事件已触发，当前值是: ${event}`;
  }

  constructor() { }

  ngOnInit() {
  }

}
