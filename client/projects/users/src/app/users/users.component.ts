import { Component } from "@angular/core";

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
export class UsersComponent{

  user = {
    firstName : "Bill",
    lastName : "Gates",
    dob : new Date('Dec 16, 1965'),
    company : 'Microsoft',
    income  : 50000,
    isWorking : true,
    image : "assets/images/bill.jpg"
  }

  onMoreInfo(user : any){
    alert(`${user.firstName} is working with ${user.company}!` );
  }

}
