import React, { Component } from 'react';
import { observable, action, computed } from 'mobx';
import { observer } from 'mobx-react';

import { Line } from 'rc-progress';

@observer
class AppStatus extends React.Component {
  @computed
  get finished() {
    return this.props.store.allTodosComplete;
  }

  render() {
    return (
      <div className={this.finished ? 'todos-finished' : ''}>
        {this.finished ? 'All done!' : 'Keep going'}
        <Line
          percent={this.props.store.todoProgress}
          strokeWidth="1"
          strokeColor="#40a580"
          trailColor="#ededed"
        />
      </div>
    );
  }
}

export default AppStatus;
