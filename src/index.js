import React from "react";
import { render } from "react-dom";
import DevTools from "mobx-react-devtools";

import TodoList from "./components/TodoList";
import AppStatus from "./components/AppStatus";
import TodoListModel from "./models/TodoListModel";
import TodoModel from "./models/TodoModel";

import './styles.css';

const store = new TodoListModel();

render(
  <div>
    <DevTools />
    <AppStatus store={store} />
    <TodoList store={store} />
  </div>,
  document.getElementById("root")
);

store.addTodo("Get Coffee");
store.addTodo("Write simpler code");
store.todos[0].finished = true;

// playing around in the console
window.store = store;
