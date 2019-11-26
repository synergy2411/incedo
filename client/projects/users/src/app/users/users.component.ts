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

  users : User[];

  onMoreInfo(user : User){
    alert(`${user.firstName} is working with ${user.company}!` );
  }

  trackByFn(index, user){
    return index;
  }
  constructor(){
    // this.user = USER_DATA;
  }

  ngOnChanges(changes : SimpleChanges){
    console.log("ngOnChanges", changes);
  }

  ngOnInit(){
    console.log("ngOnInit");
    this.users = USER_DATA;
  }
  ngDoCheck(){console.log("DoCheck");}
  ngAfterContentInit(){console.log("ngAfterContentInit");}
  ngAfterContentChecked(){console.log("ngAfterContentChecked");}
  ngAfterViewInit(){console.log("ngAfterViewInit");}
  ngAfterViewChecked(){console.log("ngAfterViewChecked");}
  ngOnDestroy(){console.log("ngOnDestroy");}

  addNewUser(){
    this.users = [{
      firstName: "Bill",
      lastName: "Gates",
      dob: new Date('Dec 16, 1965'),
      company: 'Microsoft',
      income: 50000,
      isWorking: true,
      image: "assets/images/bill.jpg",
      vote: 120
    }, {
      firstName: "Steve",
      lastName: "Jobs",
      dob: new Date('Jan 1, 1965'),
      company: 'MicrosoftApple',
      income: 0,
      isWorking: false,
      image: "assets/images/steve.png",
      vote: 100
    },{
      firstName: "Tim B.",
      lastName: "Lee",
      dob: new Date('Feb 6, 1965'),
      company: 'World Wide Web',
      income: 30000,
      isWorking: true,
      image: "assets/images/tim.jpg",
      vote: 180
    },{
      firstName: "Bill",
      lastName: "Gates",
      dob: new Date('Dec 16, 1965'),
      company: 'Microsoft',
      income: 50000,
      isWorking: true,
      image: "assets/images/bill.jpg",
      vote: 120
    }, {
      firstName: "Steve",
      lastName: "Jobs",
      dob: new Date('Jan 1, 1965'),
      company: 'MicrosoftApple',
      income: 0,
      isWorking: false,
      image: "assets/images/steve.png",
      vote: 100
    },{
      firstName: "Tim B.",
      lastName: "Lee",
      dob: new Date('Feb 6, 1965'),
      company: 'World Wide Web',
      income: 30000,
      isWorking: true,
      image: "assets/images/tim.jpg",
      vote: 180
    }]

  }

}
