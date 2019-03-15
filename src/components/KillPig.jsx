import React, { Component } from 'react';
import Title from './Title';
import SelectPig from './SelectPig';
import { Collapse } from 'react-collapse';
import Menu from './Menu';
import { Container, Row, Col } from 'reactstrap';
export default class KillPig extends Component {
  state = {};
  toggleCollapse = () => {
    this.setState({ pSelectIsOpened: true, showMenu: false });
  };
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          left: '0',
          display: 'flex',
          justifyContent: 'center',
          //   alignItems: 'center',
          border: '2px solid red'
          //
        }}
      >
        <Container
          id="main-div"
          style={{
            border: '2px solid orange',
            textAlign: 'center'
          }}
        >
          <h1>Kill Pig</h1>
        </Container>
      </div>
    );
  }
}
