const redux = require('redux'); //this is how we import in redux 


const INITIAL_VALUE = {
   counter : 0 
}



// creating reducer
// reducer take two things  store and the action
// and return store
const reducer = (store = INITIAL_VALUE , action) => {
  let newStore = store;
  if(action.type === 'INCREMENT'){
    newStore = {counter : store.counter + 1}
  }
  else if(action.type === "DECREMENT"){
    newStore = {counter : store.counter - 1}
  }
  else if (action.type === "ADDTION"){
    newStore = {counter : store.counter + action.payload.number}
  }
  
  return newStore  // return it in the form of object 
}





// redux ka object bn gya h ab usse hm store bnayenge 
// we have to pass a reducer function in store 
const store = redux.createStore(reducer);


// creating subscriber 
const subsriber = () => {
    const state = store.getState(); // use to take data from the store
    console.log(state);
}
// subscriber is made but the subscribtion is not made yet


store.subscribe(subsriber);// subscribtion is made


store.dispatch({type:"INCREMENT"});
store.dispatch({type:"DECREMENT"});
store.dispatch({type:"INCREMENT"});
store.dispatch({type:"ADDTION" , payload: {number : 3}});




