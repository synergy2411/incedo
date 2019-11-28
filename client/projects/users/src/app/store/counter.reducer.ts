import { Action } from '@ngrx/store'
import * as actionCounter from './counter.actions';


const initialState = {
  counter: 0,
  result: 0
}

export const counterReducer = (state = initialState,
      action: actionCounter.counterActions) => {

  switch (action.type) {
    case actionCounter.INCREMENT: return { ...state, counter: state.counter + 1 }
    case actionCounter.DECREMENT: return { ...state, counter: state.counter - 1 }
    case actionCounter.ADD_COUNTER: return { ...state, counter: state.counter + action.payload }
    case actionCounter.SUBSTRACT_COUNTER: return { ...state, counter: state.counter - action.payload }
    default:
      return state;
  }

  // if(action.type === actionCounter.INCREMENT){
  //   return {
  //     ...state, counter : state.counter + 1
  //   }
  // }
  // if(action.type === actionCounter.DECREMENT){
  //   return {
  //     ...state, counter : state.counter - 1
  //   }
  // }
  // return state;
}


// npm install @ngrx/store-devtools --save
