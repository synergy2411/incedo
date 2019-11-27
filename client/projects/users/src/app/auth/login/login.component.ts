import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  onLogin(f : NgForm){
    console.log(f);
    this.authService.onLogin(f.value.username, f.value.password);
  }
  constructor(private authService : AuthService) { }

  ngOnInit() {
  }

}
