import { createContext } from "react";

export const TodoItemContext = createContext([
  { todolist: [], addNewItem: () => {}, deleteItem: () => {} },
]);
