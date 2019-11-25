import { Component, OnChanges, Input, SimpleChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from "@angular/core";
import { User } from '../model/user';
import { USER_DATA} from '../model/mocks';

@Component({
    selector : "app-users",
    // template : `
    //   <h1>User component loaded successfully.</h1>
    // `
    templateUrl : './users.component.html',
    styleUrls : ['./users.component.css']
    // styles :  [`
    // h1{
    //   color : blue;
    // }
    // `]
})
export class UsersComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy{
  @Input() title : string;

  user : User;

  onMoreInfo(user : User){
    alert(`${user.firstName} is working with ${user.company}!` );
  }

  constructor(){
    // this.user = USER_DATA;
  }

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChanges", changes);
  }

  ngOnInit(){
    console.log("ngOnInit");
    this.user = USER_DATA;
  }
  ngDoCheck(){console.log("DoCheck");}
  ngAfterContentInit(){console.log("ngAfterContentInit");}
  ngAfterContentChecked(){console.log("ngAfterContentChecked");}
  ngAfterViewInit(){console.log("ngAfterViewInit");}
  ngAfterViewChecked(){console.log("ngAfterViewChecked");}
  ngOnDestroy(){console.log("ngOnDestroy");}

}
