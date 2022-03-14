import React from "react";
import { Link } from "react-router-dom";
import Classes from "./classes";
import ConditionalOutput from "./conditional-output";

import Styles from "./styles";
import TodoList from "./todo/todo-list";

const Labs = () => {
  return (
    <>
      <h1>Labs</h1>
      <Link to="/hello">Hello</Link> |<Link to="/tuiter/home">Tuiter</Link>
      <ConditionalOutput />
      <Styles />
      <Classes />
      <h2>Todo List</h2>
      <TodoList />
    </>
  );
};

export default Labs;
