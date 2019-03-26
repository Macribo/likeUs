import React, { Component } from 'react';
import { Jumbotron, Col, Row, Fade, Button } from 'reactstrap';
import Pig from './Pig';
import { Draggable, Droppable } from 'react-drag-and-drop';
import { Collapse } from 'react-collapse';
import Locker from '../images/slaughter-mask02.png';
import Stunner from '../images/baton.png';
import Club from '../images/bolter-gun.png';
import ToolTitle from './ToolTitle';

import Tool from './Tool';
import { Container } from 'reactstrap';

export default class StunPig extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }
  //////vvvvvSTATEvvvvvSTATEvvvvvSTATE///

  state = {
    jumbotron1: `We're going to process a single medium sized pig from snout to tail.`,
    doorCollapsed: false,
    defaultLead: `

    `,
    selectedTool: 'head slam',
    locker: `url(${Locker})`,
    stunner: `url(${Stunner})`,
    club: `url(${Club})`,
    textClub: 'Club',
    textMask: `Slaughter-mask`,
    textGun: 'Gun'
  };

  //////^^^^^STATE^^^^^STATE^^^^^STATE

  fadeInDoor = () => {
    // Set the opacity of the element to 0
    this.setState({ doorCollapsed: true });
    // alert('hear door');
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

  updateJumbotron = pigStatus => {
    console.log(pigStatus.age);
    console.log(pigStatus.weight);
    console.log(pigStatus.health);

    this.setState({
      jumbotron1: 'Age:    ' + pigStatus.age,
      jumbotron2: 'Weight:  ' + pigStatus.weight,
      jumbotron3: 'Health:  ' + pigStatus.health
    });
  };

  toggle() {
    this.setState({
      fadeIn: !this.state.fadeIn
    });
    setTimeout(function() {
      window.open('./stunpig');
    }, 500);
  }
  dropPig = () => {};

  //vvvvv/RENDER\vvvvv/RENDER\vvvvv/RENDER\

  render() {
    return (
      <Fade in={this.state.fadeIn}>
        <div>
          <div id="isolated-animal">
            <div id="pig-to-kill">
              <Droppable>
                <div onClick={this.killPig} />
              </Droppable>
            </div>
          </div>
          <Jumbotron
            id="stunbowtron"
            style={{ margin: '50px 0px 50px 0', margin: 0 }}
          >
            <h5
              className="display-4"
              align="right"
              style={{ paddingBottom: '10px', margin: '0 20% 0 0' }}
            >
              Choose how to stun the animal
            </h5>

            <Row>
              <Col xs="4">
                <p id="guide">
                  {' '}
                  The blow must be dealt with precision and force, so that the
                  skull is immediately smashed, causing instantaneous
                  unconsciousness
                </p>
                <p className="lead">{this.state.defaultLead}</p>
              </Col>

              <div className="tools col-8">
                <div className="kill-with">
                  <button
                    type="button"
                    className="btn  btn-outline-warning btn-lg"
                  >
                    <img
                      style={{ display: 'block' }}
                      className="kill-tools"
                      src="images/slam2.png"
                    />
                    <br /> <h5>Head Slam</h5>
                  </button>
                </div>{' '}
                <div className="kill-with">
                  <button
                    type="button"
                    className="btn  btn-outline-warning btn-lg"
                  >
                    <img
                      style={{ display: 'block' }}
                      className="kill-tools"
                      src="images/bolter-gun.png"
                    />
                    <br /> <h5>Bolt-Gun</h5>
                  </button>
                </div>{' '}
                <div className="kill-with">
                  <button
                    type="button"
                    className="btn  btn-outline-warning btn-lg"
                  >
                    <img
                      style={{ display: 'block' }}
                      className="kill-tools"
                      src="images/baton.png"
                    />
                    <br /> <h5>Club</h5>
                  </button>
                </div>{' '}
                <div className="kill-with">
                  <button
                    type="button"
                    className="btn  btn-outline-warning btn-lg"
                  >
                    <img
                      style={{ display: 'block' }}
                      className="kill-tools"
                      src="images/slaughter-mask02.png"
                    />
                    <br /> <h5>Slaughter-Mask</h5>
                  </button>
                </div>
                {/* </div> */}
                <div
                  style={{
                    // border: '2px solid red',
                    display: 'flex',
                    justifyContent: 'space-evenly',
                    marginTop: '-40px'
                  }}
                />
              </div>
            </Row>
          </Jumbotron>
          {/* </Container> */}
        </div>
      </Fade>
    );
  }
  //^^^^^/RENDER\^^^^^/RENDER\^^^^^/RENDER\
}
