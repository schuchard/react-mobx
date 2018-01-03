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

const todoStore = new TodoListModel();
const userStore = new UserListModel();

render(
  <div>
    <DevTools />
    <AppStatus store={todoStore} />
    <TodoList store={todoStore} />
    <UserList store={userStore} />
  </div>,
  document.getElementById('root')
);

todoStore.addTodo('Get Coffee');
todoStore.addTodo('Write simpler code');
todoStore.todos[0].finished = true;

userStore.addUserToList({ name: 'Jenna', age: 32, city: 'Fort Collins', state: 'CO' });
userStore.addUserToList({ name: 'Bill', age: 22, city: 'Dallas', state: 'TX' });
userStore.addUserToList({ name: 'Joe', age: 54, city: 'Los Angeles', state: 'CA' });
userStore.addUserToList({ name: 'Carl', age: 34, city: 'Denver', state: 'CO' });

// playing around in the console
window.store = { todoStore, userStore };
