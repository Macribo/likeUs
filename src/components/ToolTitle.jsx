import React, { Component } from 'react';

export default class ToolTitle extends Component {
  render() {
    return (
      <div>
        <p style={{ margin: '0px 50px 0 0' }}>{this.props.Msg}</p>
      </div>
    );
  }
}
