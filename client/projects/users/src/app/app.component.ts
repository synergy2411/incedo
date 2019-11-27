import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'users';
  showUser: boolean = true;
  myClasses = { 'border-btm': true, 'feature': false }
  myStyles = { 'color': 'green' }

  toggleClasses() {
    this.myClasses['border-btm'] = !this.myClasses['border-btm']
    this.myClasses['feature'] = !this.myClasses['feature']
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: "AIzaSyBsW7Kyxa4D8u4_CZdtdGvNzg59-sRqFAQ",
      authDomain: "proj-name-b7600.firebaseapp.com",
    })
  }

}
