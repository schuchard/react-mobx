import React, { Component } from 'react';
import { observer } from 'mobx-react';

const User = observer(({ user }) => (
  <div className="user-card-left">
    <h3>{user.name} - {user.id}</h3>
    <p>{user.age} - {user.city}, {user.state}</p>
  </div>
));
export default User;
