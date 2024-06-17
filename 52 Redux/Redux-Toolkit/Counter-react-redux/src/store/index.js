import {configureStore} from "@reduxjs/toolkit"
import counterSlice from "./counter";
import privateSlice from "./privacy";





const counterStore = configureStore( { reducer : {
  counter : counterSlice.reducer,
  private : privateSlice.reducer,
}} )




export default counterStore;



    


// const counterReducer = (store = INITIAL_VALUE , action) =>  {
//   let newStore = store;
//   if(action.type ===  "INCREMENT")
//   {
//       newStore = { ...store , counter : store.counter + 1}
//   }
//   else if(action.type === "DECREMENT")
//   {
//     newStore = { ...store ,  counter : store.counter - 1 };
//   }
//   else if(action.type === "ADDITION"){
//     newStore = { ...store , counter : store.counter + Number(action.payload)}
//   }
//   else if(action.type === "SUBSTRACTION"){
//     newStore = { ...store , counter : store.counter - Number(action.payload)}
//   }
//   else if(action.type === "PRIVATE"){
//     newStore = { ...store , privacy : !store.privacy}
//   }
//   return newStore
// }
