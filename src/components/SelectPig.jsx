import React, { Component } from 'react';
import { Jumbotron, Col, Row, Fade } from 'reactstrap';
import Pig from './Pig';
import { Draggable, Droppable } from 'react-drag-and-drop';
import { Collapse } from 'react-collapse';
// import { Route } from 'react-router-dom';

export default class SelectPig extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  state = {
    jumbotron1: `Let's to process a single medium sized pig from snout to tail.`,
    doorCollapsed: false
  };
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
  render() {
    return (
      <Fade in={this.state.fadeIn}>
        <div>
          <Jumbotron
            id="select-pig"
            style={{ height: '330px', padding: '10px' }}
          >
            <Row>
              <Col xs="8">
                <h1 className="display-3">Select Pig</h1>
                <p className="lead">{this.state.jumbotron1}</p>
                <p className="lead">{this.state.jumbotron2}</p>
                <p className="lead">{this.state.jumbotron3}</p>
              </Col>
              <Col
                xs="4"
                style={{
                  margin: 0
                }}
              >
                {' '}
                <Collapse isOpened={this.state.doorCollapsed ? true : false}>
                  <Droppable
                    align="right"
                    types={['pig']} // <= allowed drop types
                    // onDrop={this.onDrop.bind(this)}>
                    onDrop={this.toggle}
                  >
                    {' '}
                    <div
                      className="door"
                      style={{
                        margin: 0
                      }}
                    />
                    <h6 align="center">KILL ROOM</h6>
                  </Droppable>
                </Collapse>
              </Col>
            </Row>
            <hr className="my-2" />
            <p>
              Mouseover an animal to examine it. When you've made your
              selection, drag it to the kill room.
            </p>{' '}
          </Jumbotron>
          <div className="pigholder">
            <Draggable type="pig" data="pig0">
              {' '}
              <Pig
                id="pig0"
                age="8 months old"
                weight="45kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoorHandler={this.fadeInDoor}
              />
            </Draggable>
            <Draggable type="pig" data="pig1">
              {' '}
              <Pig
                id="pig1"
                age="9 months old"
                weight="65kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoorHandler={this.fadeInDoor}
              />
            </Draggable>
            <Draggable type="pig" data="pig2">
              {' '}
              <Pig
                id="pig2"
                age="10 months old"
                weight="55kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoorHandler={this.fadeInDoor}
              />
            </Draggable>
            <Draggable type="pig" data="pig3">
              {' '}
              <Pig
                id="pig3"
                age="11 months old"
                weight="43kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoorHandler={this.fadeInDoor}
              />
            </Draggable>
          </div>
        </div>
      </Fade>
    );
  }
}
