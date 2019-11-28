export const INCREMENT = "INCREMENT";
export const DECREMENT = "DECREMENT";
export const ADD_COUNTER = "ADD_COUNTER";
export const SUBSTRACT_COUNTER = "SUBSTRACT_COUNTER";

export class IncrementCounter {
  readonly type = INCREMENT;
}
export class DecrementCounter {
  readonly type = DECREMENT;
}
export class AddCounter {
  readonly type = ADD_COUNTER;
  constructor(public payload: number) { }
}
export class SubstractCounter {
  readonly type = SUBSTRACT_COUNTER;
  constructor(public payload: number) { }
}

export type counterActions = IncrementCounter | DecrementCounter |
  AddCounter | SubstractCounter;
