import React, { Component } from 'react';
import Title from './Title';
import SelectPig from './SelectPig';
import KillPig from './KillPig';
import BleedPig from './BleedPig';

import Menu from './Menu';
import { Container, Row, Col } from 'reactstrap';
export default class Likeus extends Component {
  render() {
    return (
      <div
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          backgroundColor: 'black',
          left: '0',
          border: '2px solid orange'
        }}
      >
        <Container id="main-div">
          <Row>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <Title />
              {/* <Menu /> */}

              <SelectPig />
              <KillPig />
              <BleedPig />
              {/* <SelectPig/> */}
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}
