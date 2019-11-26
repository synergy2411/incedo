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
    console.log("Contructor")
    this.registerForm = this.fb.group({
      username: this.username,
      password: this.password
    })
  }

  hasExclamationMark(input: FormControl) {
    console.log("Validation")
    if (input.value) {
      const hasExclamation = input.value.indexOf("!") >= 0;
      return hasExclamation ? null : { 'hasExclamation': true }
    }
  }

  onRegister() {
    console.log(this.registerForm);
  }
  ngOnInit() {
  }

}
