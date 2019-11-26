import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'users';
  showUser : boolean = true;
  myClasses = {'border-btm' : true, 'feature' : false}
  myStyles = {'color' : 'green'}

  toggleClasses(){
    this.myClasses['border-btm'] = !this.myClasses['border-btm']
    this.myClasses['feature'] = !this.myClasses['feature']
  }
}
