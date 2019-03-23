import React, { Component } from 'react';
import Title from './Title';
import SelectPig from './SelectPig';
import StunPig from './StunPig';

import { Collapse } from 'react-collapse';
import Menu from './Menu';
import { Container, Row, Col } from 'reactstrap';
export default class Likeus extends Component {
  state = {
    showMenu: true,
    pSelectIsOpened: false
  };
  toggleCollapse = () => {
    this.setState({ pSelectIsOpened: true, showMenu: false });
  };
  render() {
    return (
      <div
        id="like-us-main-div"
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          left: '0'
        }}
      >
        {/* <Container id="main-div" style={{ margin: 0 }}> */}
        <Row>
          <Col sm="12" md={{ size: 10, offset: 1 }}>
            <Collapse isOpened={this.state.showMenu}>
              <Title />

              <Menu toggleCollapse={this.toggleCollapse} />
            </Collapse>
            <Collapse isOpened={this.state.pSelectIsOpened}>
              <StunPig />
            </Collapse>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    );
  }
}
