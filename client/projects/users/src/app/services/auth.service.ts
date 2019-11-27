import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : string = null;
  constructor(private router : Router) { }

  onRegister(email : string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("SUCCESS");
      }).catch(err => console.log(err));
  }

  onLogin(email : string, password : string){
    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(response=> {
        firebase.auth().currentUser.getIdToken()
          .then(token => {
            console.log("TOKEN", token);
            this.token = token;
            this.router.navigate(['users']);
          })
        console.log("Logged in")
      }).catch(err => console.log(err))
  }


  getToken(){
    return this.token;
  }

  isAuthenticated(){
    return this.token !=null;
  }

}


// npm install firebase --save
