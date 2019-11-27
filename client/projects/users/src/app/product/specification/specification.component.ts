import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-specification',
  templateUrl: './specification.component.html',
  styleUrls: ['./specification.component.scss']
})
export class SpecificationComponent implements OnInit {

  fname : string;
  constructor(private route : ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.fname = params['name'];
    })
   }

  ngOnInit() {
  }

}
