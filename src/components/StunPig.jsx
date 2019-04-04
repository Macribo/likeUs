import React, { Component } from 'react';
import { Jumbotron, Col, Row, Fade, Button } from 'reactstrap';
import { Draggable, Droppable } from 'react-drag-and-drop';
import Locker from '../images/slaughter-mask02.png';
import Stunner from '../images/baton.png';
import StunToolModal from './StunToolModal';
import Club from '../images/bolter-gun.png';

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
    textGun: 'Gun',
    goToBleed: 'false'
  };
  //////^^^^^STATE^^^^^STATE^^^^^STATE

  fadeInDoor = () => {
    // Set the opacity of the element to 0
    this.setState({ doorCollapsed: true });
    // alert('hear door');
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
  handleGoToBleed() {
    this.setState({ goToBleed: true });
    // alert(this.state.goToBleed);
    this.props.toggleCollapseStun();
  }
  //vvvvv/RENDER\vvvvv/RENDER\vvvvv/RENDER\

  render() {
    var toolName = [
      `Head Slam`,
      `Stun Gun`,
      `Direct blow to skull using a club or poleaxe`,
      `Slaughter Mask`
    ];
    var toolInfo = [
      `You are choosing to lift this animal by the hind legs and "slam" it's head against the floor or wall until it is incapable of standing back up again. Is this correct?`,
      `You are choosing to pass an electric current through the creature's brain until stunned.  Caution: electodes must be accurately placed (Figs 20 and 21). Caution: places where the skull is thick must be avoided. Caution: Electrical contact is impeded by hair and caked mud. 
      Caution: Excessive moisture may short-circuit the current flow, missing the brain. Apply the electrodes with strong pressure. Stand clear. Proceed?`,
      `You are choosing to stun the animal by smashing it's skull in with a club. Is this correct?`,
      `You are choosing to render this animal unconscious with the Slaughter Mask method. The mask is placed upon the beast. A bolt held in the correct position by the mask is driven into the animal's brain by a hammer blow. The device is fitted with a spring which returns the bolt to its original position. Is this correct?`
    ];
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
              Choose stun method
            </h5>

            <Row>
              <Col xs="4">
                <p className="lead">{this.state.defaultLead}</p>
              </Col>

              <div className="tools col-12">
                <div className="kill-with">
                  <StunToolModal
                    id="hs"
                    goToBleed={this.handleGoToBleed.bind(this)}
                    toolName={toolName[0]}
                    whichToolImg={'images/slam2.png'}
                    toolInfo={toolInfo[0]}
                  />
                  <br /> <h5>Head Slam</h5>
                </div>{' '}
                <div className="kill-with">
                  <StunToolModal
                    id="bg"
                    goToBleed={this.handleGoToBleed}
                    toolName={toolName[1]}
                    whichToolImg={'images/bolter-gun.png'}
                    toolInfo={toolInfo[1]}
                  />
                  <br /> <h5>Stun-Gun</h5>
                </div>{' '}
                <div className="kill-with">
                  <StunToolModal
                    id="c"
                    goToBleed={this.handleGoToBleed}
                    toolName={toolName[2]}
                    whichToolImg={'images/baton.png'}
                    toolInfo={toolInfo[2]}
                  />
                  <br /> <h5>Club</h5>
                </div>{' '}
                <div className="kill-with">
                  <StunToolModal
                    id="sm"
                    goToBleed={this.handleGoToBleed}
                    toolName={toolName[3]}
                    whichToolImg={'images/slaughter-mask02.png'}
                    toolInfo={toolInfo[3]}
                  />
                  <br /> <h5>Slaughter-Mask</h5>
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
