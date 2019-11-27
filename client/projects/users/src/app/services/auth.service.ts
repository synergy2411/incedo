import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  onRegister(email : string, password:string){
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .then(response => {
        console.log("SUCCESS");
      }).catch(err => console.log(err));
  }

}


// npm install firebase --save
