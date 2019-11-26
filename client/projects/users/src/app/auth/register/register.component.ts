import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  username = new FormControl(null, [
    Validators.required,
    Validators.email
  ]);
  password = new FormControl(null, [
    Validators.required,
    Validators.minLength(6),
    this.hasExclamationMark
  ]);

  registerForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  hasExclamationMark(input: FormControl) {
    if (input.value) {
      const hasExclamation = input.value.indexOf("!") >= 0;
      return hasExclamation ? null : { 'hasExclamation': true }
    }
  }

  cnfPassword(input : FormControl){
    if(input.parent && input.parent.controls){
      const matchPassword = input.value === input.parent.controls['password'];
      return matchPassword ? null : {"matchPassword" : false};
    }
  }

  onRegister() {
    console.log(this.registerForm);
  }
  ngOnInit() {
  }

}
