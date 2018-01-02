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
          <input type="text" value={this.id} onChange={this.handleId} />
          Update state code:
          <input type="text" value={this.stateCode} onChange={this.handleState} />
          <button type="click">Update</button>
        </form>
        <h3>User list</h3>
        <ul>{this.props.store.users.map((user) => <User user={user} key={user.id} />)}</ul>
      </div>
    );
  }

  handleId = (e) => {
    this.id = e.target.value;
  };

  handleState = (e) => {
    this.stateCode = e.target.value;
  };

  @action
  handleFormSubmit = (e) => {
    this.props.store.updateUserStateCode(this.id, this.stateCode);
    e.preventDefault();
  };
}

export default UserList;
