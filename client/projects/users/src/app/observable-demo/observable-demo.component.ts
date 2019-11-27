import { Component, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.scss']
})
export class ObservableDemoComponent implements OnInit {

  subObs : Subscription;
  obsDemo = Observable.create((observer) => {
    setTimeout(() => {
      observer.next("First Package")
    }, 1000)
    setTimeout(() => {
      observer.next("Second Package")
    }, 2000)
    setTimeout(() => {
      observer.next("Third Package")
    }, 3000)
    // setTimeout(() => {
    //   observer.error(new Error("Some bad happened!"));
    // }, 4000)
    setTimeout(() => {
      observer.complete();
    }, 5000)
  })

  packages = [];

  onSubscribe() {
    this.subObs = this.obsDemo.subscribe(
      response => {
        this.packages.push(response);
      },
      err => console.log(err),
      () => { console.log("COMPLETED") }
    )
  }

  onUnsubscribe(){
    this.subObs.unsubscribe();
  }

  constructor() { }

  ngOnInit() {
  }

}
