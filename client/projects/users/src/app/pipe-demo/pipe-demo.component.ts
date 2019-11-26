import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.scss']
})
export class PipeDemoComponent implements OnInit {

  filterStatus: string = "";
  todos = [
    { label: "to renew insurance", status: "done" },
    { label: "to pot plant", status: "pending" },
    { label: "to buy pulses", status: "done" },
    { label: "to read books", status: "pending" },
  ]

  addNewItem(){
    this.todos.push({label : "New Item", status : "pending"});
  }
  promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes...")
    }, 2000)
  })

  contact_no: number = 987654321;

  constructor() { }

  ngOnInit() {
  }

}
