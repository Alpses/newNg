import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'roadToNg';
  private stepsList:string[];
  constructor(){
    this.stepsList=[
      '快速入眠',
      '指令',
      '表单',
      '路由',
    ]
  }
}
