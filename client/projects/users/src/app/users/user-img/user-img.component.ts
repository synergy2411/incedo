import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss']
})
export class UserImgComponent implements OnInit {

  @Input() user : any;
  @Output('childEvent') childEvent = new EventEmitter<any>()

  moreInfo(user : any){
    console.log(user);
    this.childEvent.emit(user);
  }

  constructor() { }

  ngOnInit() {
  }

}
