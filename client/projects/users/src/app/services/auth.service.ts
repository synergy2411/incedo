import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private token : string = null;
  constructor() { }

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
