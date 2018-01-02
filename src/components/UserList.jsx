import React, { Component } from 'react';
import { observable, action } from 'mobx';
import { observer } from 'mobx-react';

import User from './User';

@observer
class UserList extends React.Component {
  @observable stateCode;
  @observable id;

  render() {
    return (
      <div>
        <hr />
        <form onSubmit={this.handleFormSubmit}>
          ID:
          <input type="text" name="id" value={this.id} onChange={this.handleInputChange} />
          Update state code:
          <input
            type="text"
            name="stateCode"
            value={this.stateCode}
            onChange={this.handleInputChange}
          />
          <button type="click">Update</button>
        </form>

        <h3>User list</h3>
        <ul>{this.props.store.users.map((user) => <User user={user} key={user.id} />)}</ul>
      </div>
    );
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this[name] = value;
  };

  @action
  handleFormSubmit = (e) => {
    if (this.id && this.stateCode) {
      this.props.store.updateUserStateCode(this.id, this.stateCode);
      this.id = '';
      this.stateCode = '';
    }

    e.preventDefault();
  };
}

export default UserList;
