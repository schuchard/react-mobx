import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Line } from 'rc-progress';
import styled from 'styled-components';

@observer
class AppStatus extends React.Component {
  @computed
  get finished() {
    return this.props.store.allTodosComplete;
  }

  render() {
    return (
      <TodoStatusContainer finished={this.finished}>
        {this.finished ? 'All done!' : 'Keep going'}
        <Line
          percent={this.props.store.todoProgress}
          strokeWidth="1"
          strokeColor="#40a580"
          trailColor="#ededed"
        />
      </TodoStatusContainer>
    );
  }
}

export default AppStatus;

const TodoStatusContainer = styled.div`
  background-color: ${(props) => (props.finished ? 'greenyellow' : '')};
  margin: 15px 0;
`;
