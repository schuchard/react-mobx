import { observable, computed, action, when, reaction } from 'mobx';

import TodoModel from './TodoModel';

export default class TodoListModel {
  @observable todos = [];

  constructor() {
    // Effect when all todos are complete
    reaction(
      () => this.allTodosComplete && this.todos,
      (completedTodos) => {
        if (completedTodos) {
          window.alert(`finished:\n ${completedTodos.map((t) => '\n - ' + t.title).join(',')}`);
        }
      }
    );
  }

  @computed
  get unfinishedTodoCount() {
    return this.todos.filter((todo) => !todo.finished).length;
  }

  @computed
  get finishedTodoCount() {
    return this.todos.length - this.unfinishedTodoCount;
  }

  @computed
  get allTodosComplete() {
    return this.unfinishedTodoCount === 0;
  }

  @computed
  get todoProgress() {
    return this.finishedTodoCount / this.todos.length * 100;
  }

  @action
  addTodo(title) {
    this.todos.push(new TodoModel(title));
  }

  @action
  unCheckAllTodos() {
    this.todos.forEach((t) => (t.finished = false));
  }
}
