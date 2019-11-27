import { Injectable } from "@angular/core";
import { USER_DATA } from '../model/mocks';
import { User } from '../model/user';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private userData: User[] = [];

  constructor(private httpClient: HttpClient) {
    this.userData = USER_DATA
  }

  // getData() : Observable<User[]> {
  //   return this.httpClient.get("https://proj-name-b7600.firebaseio.com/userdata.json")
  //     .pipe(map(response => <User[]>response['userdata']))
  //   // return this.userData.splice(0);
  // }
  
  getData(): Observable<User[]> {
    return this.httpClient.get<User[]>("https://proj-name-b7600.firebaseio.com/userdata.json")
  }
}


