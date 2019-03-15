import React, { Component } from 'react';
import Title from './Title';
import SelectPig from './SelectPig';
import KillPig from './KillPig';
import BleedPig from './BleedPig';
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
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          left: '0'
          //   border: '2px solid orange'
        }}
      >
        <Container id="main-div">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Collapse isOpened={this.state.showMenu}>
                <Title />
                {/* {this.state.showMenu}{' '} */}
                <Menu toggleCollapse={this.toggleCollapse} />
              </Collapse>
              <Collapse isOpened={this.state.pSelectIsOpened}>
                <SelectPig />
              </Collapse>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
