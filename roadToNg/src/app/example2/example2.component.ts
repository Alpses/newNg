import { Component, OnInit, ElementRef, ViewChild,ViewChildren, AfterViewInit,TemplateRef ,ViewContainerRef,QueryList } from '@angular/core';
import { Example2ChildComponent } from '../example2-child/example2-child.component';

@Component({
  selector: 'app-example2',
  templateUrl: './example2.component.html',
  styleUrls: ['./example2.component.css']
})
export class Example2Component implements AfterViewInit {
  testNodeContent:string = 'Hello Node';
/*
  @ViewChild('greet') greetDiv: ElementRef;
  constructor() { }

  ngOnInit() {
  }
  ngAfterViewInit(){
    console.dir(this.greetDiv);
  }
*/
  @ViewChild('tpl') tplRef: TemplateRef<any>;

  @ViewChild('tpl', { read: ViewContainerRef }) tplVcRef: ViewContainerRef;

  ngAfterViewInit() {
    console.dir(this.tplVcRef);
    this.tplVcRef.createEmbeddedView(this.tplRef);
    console.dir(this.childCmp);
    console.log('--------------------------')
    console.dir(this.childCmpQueryList);
    console.log(this.divTest);
    this.divTest.nativeElement.style.backgroundColor = 'red';
  }


  @ViewChildren(Example2ChildComponent) childCmpQueryList: QueryList<Example2ChildComponent> ;
  @ViewChild(Example2ChildComponent) childCmp: Example2ChildComponent;
  constructor(){
    
  }

  @ViewChild('divt') divTest: ElementRef;
}
