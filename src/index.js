import React from 'react';
import { render } from 'react-dom';
import DevTools from 'mobx-react-devtools';

import TodoList from './components/TodoList';
import AppStatus from './components/AppStatus';
import TodoListModel from './models/TodoListModel';
import TodoModel from './models/TodoModel';

import './styles.css';
import UserList from './components/UserList';
import UserListModel from './models/UserListModel';

const store = new TodoListModel();
const userStore = new UserListModel();

render(
  <div>
    <DevTools />
    <AppStatus store={store} />
    <TodoList store={store} />
    <UserList store={userStore} />
  </div>,
  document.getElementById('root')
);

store.addTodo('Get Coffee');
store.addTodo('Write simpler code');
store.todos[0].finished = true;

userStore.addUserToList({ name: 'Jenna', age: 32, city: 'Fort Collins', state: 'CO' });
userStore.addUserToList({ name: 'Bill', age: 22, city: 'Dallas', state: 'TX' });

// playing around in the console
window.store = store;
