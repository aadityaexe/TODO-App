/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import styles from "./AddTodo.module.css";

function AddTodo({ onNewItem }) {
  const [todoName, setTodoName] = useState("");
  const [dueDate, setDueDate] = useState("");
  const handleNameChange = (event) => {
    setTodoName(event.target.value);
  };
  const handleDateChange = (event) => {
    setDueDate(event.target.value);
  };
  const handleAddButtonClick = (event) => {
    console.log(event);
    event.preventDefault();
    if (todoName && dueDate) {
      onNewItem(todoName, dueDate);
      setTodoName("");
      setDueDate("");
    }
  };
  return (
    <div className="container text-center">
      <form action="" className="row kg-row" onSubmit={handleAddButtonClick}>
        <div className="col-6">
          <input
            className={styles.inputTodo}
            type="text"
            value={todoName}
            placeholder="Enter Todo Here"
            onChange={handleNameChange}
          />
        </div>
        <div className="col-4">
          <input
            className={styles.inputTodo}
            type="date"
            value={dueDate}
            onChange={handleDateChange}
          />
        </div>
        <div className="col-2">
          <button type="submit" className="btn btn-success kg-button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddTodo;
