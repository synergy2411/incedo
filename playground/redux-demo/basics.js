const { createStore } = require("redux");


const initialState = {
    counter : 0,
    result : 0
}

const rootReducer = (state = initialState, action) =>{
    
    if(action.type === "INCREMENT"){
        return {
            ...state, counter : state.counter + 1
        }
    }
    if(action.type === "DECREMENT"){
        return {
            ...state, counter : state.counter - 1
        }
    }
    return state;

}

const store = createStore(rootReducer);

console.log(store.getState());     

store.subscribe(() =>{
    console.log(store.getState()); 
})

store.dispatch({type : "INCREMENT"})
store.dispatch({type : "DECREMENT"});
store.dispatch({type : "INCREMENT"})
store.dispatch({type : "INCREMENT"})
    