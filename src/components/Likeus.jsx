import React, { Component } from 'react';
import Title from './Title';
import SelectPig from './SelectPig';
import StunPig from './StunPig';

import { Collapse } from 'react-collapse';
import Menu from './Menu';
import { Container, Row, Col } from 'reactstrap';
export default class Likeus extends Component {
  //////vvvvvSTATEvvvvvSTATEvvvvvSTATE///

  state = {
    showMenu: true,
    pSelectIsOpened: false,
    pStunIsOpened: false
  };

  //////^^^^^STATE^^^^^STATE^^^^^STATE

  toggleCollapseMenu = () => {
    this.setState({ pSelectIsOpened: true, showMenu: false });
  };
  toggleCollapseStun = () => {
    alert('stunned');
  };
  toggleCollapseSelect = () => {
    this.setState({ pSelectIsOpened: false, pStunIsOpened: true });
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

              <Menu toggleCollapseMenu={this.toggleCollapseMenu} />
            </Collapse>
            <Collapse isOpened={this.state.pSelectIsOpened}>
              <SelectPig toggleCollapseSelect={this.toggleCollapseSelect} />
            </Collapse>
            <Collapse isOpened={this.state.pStunIsOpened}>
              <StunPig toggleCollapseStun={this.toggleCollapseStun} />
            </Collapse>
          </Col>
        </Row>
        {/* </Container> */}
      </div>
    );
  }
}
