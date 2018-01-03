import React, { Component } from 'react';
import { observer } from 'mobx-react';
import styled from 'styled-components';

const User = observer(({ user }) => (
  <UserCard>
    <h3>
      {user.name} - {user.id}
    </h3>
    <p>
      {user.age} - {user.city}, {user.state}
    </p>
  </UserCard>
));

export default User;

const UserCard = styled.div`
  border-left: 4px solid #3e98d0;
  padding-left: 14px;
`;
