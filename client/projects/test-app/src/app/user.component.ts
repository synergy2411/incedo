import { Component } from "@angular/core";
import { UserService } from './user.service';

@Component({
  selector : "app-user",
  template : `<p>User loaded!</p>`
})
export class UserComponent{
  user : {name : string}
  constructor(private userService : UserService){}
  ngOnInit(){
    this.user = this.userService.user;
  }
}
