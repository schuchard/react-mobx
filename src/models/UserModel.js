import { observable } from 'mobx';
import nanoid from 'nanoid';

export default class UserModel {
  id = nanoid(6);
  @observable name;
  @observable age;
  @observable city;
  @observable state;

  constructor(user) {
    this.name = user.name;
    this.age = user.age;
    this.city = user.city;
    this.state = user.state;
  }
}
