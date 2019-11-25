import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-user-img',
  templateUrl: './user-img.component.html',
  styleUrls: ['./user-img.component.scss']
})
export class UserImgComponent implements OnInit {

  @Input() user : any;

  constructor() { }

  ngOnInit() {
  }

}
