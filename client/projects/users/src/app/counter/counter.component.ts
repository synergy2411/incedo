import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import  * as actionCounter from '../store/counter.actions';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss']
})
export class CounterComponent implements OnInit {

  counter : number;
  constructor(private store : Store<any>) { }

  ngOnInit() {
    this.store.subscribe(state => {
      console.log(state);
      this.counter = state['counterReducer'].counter;
    })
  }

  onIncrement(){
    this.store.dispatch(new actionCounter.IncrementCounter());
  }
  onDecrement(){
    // this.store.dispatch({type : "DECREMENT"})
    this.store.dispatch(new actionCounter.DecrementCounter());
  }

  onAdd(num : number){
    this.store.dispatch(new actionCounter.AddCounter(num))
  }
  onSubstract(num: number){
    this.store.dispatch(new actionCounter.SubstractCounter(num));
  }

}
