import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';

@Injectable({
  providedIn : 'root'
})

export class UserService{

  user = {name : "Foo"};

  getData(){
    return "Some Value";
  }

  getPromise(){
    return new Promise((resolve, reject) => {
      resolve("Promise Value")
    })
  }

  getObservable(){
    return Observable.create(observer => {
      observer.next("First Package");
    })
  }
}
