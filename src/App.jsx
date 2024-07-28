/* eslint-disable no-unused-vars */
import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import "./App.css";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WellcomeMESSAGE from "./components/WelcomeMessage";

function App() {
  const [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item added : ${itemName} date : ${itemDate}`);
    const newTodoItem = [...todoItems, { name: itemName, dueDate: itemDate }];
    setTodoItems(newTodoItem);
  };

  const handleDeleteItem = (todoItemName) => {
    const newTodoItem = todoItems.filter((item) => item.name !== todoItemName);
    setTodoItems(newTodoItem);

    console.log(`item delete is ${todoItemName}`);
  };

  return (
    <>
      <center className="todo-container">
        <AppName />
        <AddTodo onNewItem={handleNewItem} />
        {todoItems.length === 0 && <WellcomeMESSAGE todoItems={todoItems} />}

        <TodoItems
          todoItems={todoItems}
          onDeleteClick={handleDeleteItem}
        ></TodoItems>
      </center>
    </>
  );
}

export default App;
