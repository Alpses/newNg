import { Component, OnInit , ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'app-example1',
  templateUrl: './example1.component.html',
  styleUrls: ['./example1.component.css'],
  encapsulation:ViewEncapsulation.Emulated // None | Emulated | Native
})
export class Example1Component implements OnInit {
  initialCount: number = 5;
  constructor() { }

  ngOnInit() {
  }

}
