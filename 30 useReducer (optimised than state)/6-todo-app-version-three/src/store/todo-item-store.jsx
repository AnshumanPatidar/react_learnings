import { createContext, useReducer } from "react";

export const TodoItemContext = createContext([
  { todolist: [], addNewItem: () => {}, deleteItem: () => {} },
]);

// REDUCER IS A PURE FUNCTION , CAN BE IN A SAPARATE FOLDER
const todoItemReducer = (currTodoItems, action) => {
  // DON'T MAKE "newTodoList" CONST IT WILL THROUGH ERROR
  let newTodoList = currTodoItems;
  // HANDLE THE ACTION
  if (action.type === "NEW_ITEM") {
    if (action.payload.itemName !== "" && action.payload.itemDueDate !== "") {
      newTodoList = [
        ...newTodoList,
        { name: action.payload.itemName, dueDate: action.payload.itemDueDate },
      ];
    } else {
      alert("PLEASE ENTER PROPER DETAILS");
    }
  } else if (action.type === "DELETE_ITEM") {
    newTodoList = newTodoList.filter(
      (item) => item.name !== action.payload.todoItemName
    );
    console.log(` item delete ${action.payload.todoItemName}`);
  }
  // AND RETURN THE NEW STATE
  return newTodoList;
};

const TodoItemContextProvider = ({ children }) => {
  const [todolist, dispatchTodoItems] = useReducer(todoItemReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // yhs pr jo bhi action  hoga uska ka object banaya h
    const newItemAction = {
      type: "NEW_ITEM", // generally type capital letters me diya jata h pr kese bhi de skte h bs unique hona chahiye
      payload: {
        itemName,
        itemDueDate,
      },
    };

    // HERE WE DISPACTCHED THE ACTION AND NOW IT WILL GO TO REDUCER
    dispatchTodoItems(newItemAction);
  };

  const deleteItem = (todoItemName) => {
    const deleteItemAction = {
      type: "DELETE_ITEM",
      payload: {
        todoItemName,
      },
    };

    dispatchTodoItems(deleteItemAction);
  };

  return (
    <TodoItemContext.Provider value={{ todolist, addNewItem, deleteItem }}>
      {children}
    </TodoItemContext.Provider>
  );
};

export default TodoItemContextProvider;
