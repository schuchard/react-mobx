import { observable, action, computed } from 'mobx';
import UserModel from './UserModel';

export default class UserListModel {
  @observable users = [];

  @action
  addUserToList(user) {
    this.users.push(new UserModel(user));
  }

  @action
  updateUserStateCode(id, state) {
    const user = this.users.find((u) => u.id == id);

    if (user) {
      user.state = state;
    }
  }
}
