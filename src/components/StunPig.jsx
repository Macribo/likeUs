import React, { Component } from 'react';
import { Draggable, Droppable } from 'react-drag-and-drop';
import { Collapse } from 'react-collapse';
import Locker from '../images/locker.png';
import Stunner from '../images/knife.png';
import Club from '../images/hanged_pig.png';

import { Jumbotron, Button } from 'reactstrap';
import Tool from './Tool';
import { Container, Row, Col } from 'reactstrap';
export default class StunPig extends Component {
  state = {
    defaultLead: `
      UN Guidlelines for Slaughtering Animals
      `,
    selectedTool: 'head slam',
    locker: `url(${Locker})`,
    stunner: `url(${Stunner})`,
    club: `url(${Club})`
  };
  possibleResults = {
    clubOrPoleaxe: [
      `You have chosen to slam this animal's head against the floor until she is dead; in accordance with the EU guidelines of order to consume Breith ar an cluais.`,
      `Chas uait é agus breith ar, ós cionn a gcrúbín .
      Lúas fó dheis é.
      Lúasc fó chlé é, //chas tímpeal é ? lúasc fó dheis é. Greidhm agat ar ?
      Luasc i gcoinne an túrlár é
      : breith greidhm ar agus lúasc é 
      
      : lúasc fó dheis é-
      chas tímpeal é ? lúasc fó chlé é? chas tímpeal é?
      lúasc fó dheis é,`,
      `Direct blow to skull using a club or poleaxe. The blow must be dealt with precision and force, so that the skull is immediately smashed, causing instantaneous unconsciousness. Pigs have a well-developed frontal cavity so the blow should be aimed slightly above the eyes.`
    ],
    slaughteringMask: [
      `A bolt held in the correct position by the mask is driven into the animal's brain by a hammer blow. The device is fitted with a spring which returns the bolt to its original position.`
    ],
    electricalStun: [
      `An electric current of high frequency but low voltage (60–80 V) is passed through the brain of an animal for a few seconds to produce unconsciousness.  must be accurately placed (Figs 20 and 21). Places where the skull is thick must be avoided. Electrical contact is impeded by hair and caked mud. The head must not be completely wet otherwise the current will have a short-circuit path avoiding the brain. The electrodes must be applied with strong pressure.`
    ]
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
          display: 'flex'
        }}
      >
        <Container
          id="main-div"
          style={{
            alignContent: 'center',
            justifyContent: 'center',
            alignItems: 'center'
          }}
          align="center"
        >
          <div id="pig-to-kill" onClick={this.killPig} />
          <Jumbotron
            id="stunbowtron"
            style={{ margin: '50px 0px 50px 0', margin: 0 }}
          >
            <h5 className="display-4" style={{ paddingBottom: '10px' }}>
              Stun the Pig
            </h5>

            {/* <p className="lead">Select a stunner from the menu</p> */}

            <Row
            // style={{ border: '3px solid orange' }}
            >
              <Col>
                <p id="guide">
                  {' '}
                  The blow must be dealt with precision and force, <br />
                  so that the skull is immediately smashed,
                  <br />
                  causing instantaneous unconsciousness
                </p>
                <p className="lead">{this.state.defaultLead}</p>
              </Col>

              <Col>
                {/* <Button color="warning"> */}
                <div className="tools">
                  <Tool ToolName={'Club'} src={this.state.club} />
                  <Tool
                    ToolName={'Slaughtering Mask'}
                    src={this.state.stunner}
                  />
                  <Tool ToolName={'Electrical Stun'} src={this.state.locker} />
                </div>
              </Col>
            </Row>
          </Jumbotron>
        </Container>
      </div>
    );
  }
}
