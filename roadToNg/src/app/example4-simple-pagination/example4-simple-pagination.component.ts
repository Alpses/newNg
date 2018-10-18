import { Component, OnInit ,Input, Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-example4-simple-pagination',
  template: `
    <button (click)="previousPage()" [disabled]="!hasPrevious()">{{previousText}}</button>
    <button (click)="nextPage()" [disabled]="!hasNext()">{{nextText}}</button>
    <p>page <span> {{page}}</span> of <span> {{pageCount}} </span></p>
  `,
  styleUrls: ['./example4-simple-pagination.component.css']
})
export class Example4SimplePaginationComponent implements OnInit {
  //设置默认值
  @Input() previousText = 'Previous' ;
  @Input() nextText = 'Next' ;

  @Input() pageCount:number ;
  @Input() page:number ;
  @Output() pageChanged :EventEmitter<any> = new EventEmitter ;
  constructor() { }
  ngOnInit() { }

  previousPage(){
    this.pageChanged.emit(--this.page);
  }
  nextPage(){
    this.pageChanged.emit(++this.page);
  }
  hasNext(){
    return this.page < this.pageCount;
  }
  hasPrevious(){
    return this.page > 1;
  }
}
