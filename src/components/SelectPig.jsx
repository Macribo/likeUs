import React, { Component } from 'react';
import { Jumbotron, Button, Fade } from 'reactstrap';
import Pig from './Pig';
import { Draggable, Droppable } from 'react-drag-and-drop';

export default class SelectPig extends Component {
  constructor(props) {
    super(props);
    this.state = { fadeIn: true };
    this.toggle = this.toggle.bind(this);
  }

  state = {
    jumbotron1: `We're going to process a single medium sized pig from snout to tail.`,
    doorVisibile: 0
  };
  fadeInDoor = () => {
    // Set the opacity of the element to 0
    this.setState({ doorVisibile: 1 });
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
  }
  dropPig = () => {};
  render() {
    return (
      <Fade in={this.state.fadeIn}>
        <div>
          <Jumbotron id="select-pig" style={{ height: '320px' }}>
            <h1 className="display-3">Select Pig</h1>
            <p className="lead">{this.state.jumbotron1}</p>
            <p className="lead">{this.state.jumbotron2}</p>
            <p className="lead">{this.state.jumbotron3}</p>
            <hr className="my-2" />
            <p>
              Touch an animal to examine it. When you've made your selection,
              drag it down to the slaughter area.
            </p>
          </Jumbotron>
          <div className="pigholder">
            <Draggable type="pig" data="pig0">
              {' '}
              <Pig
                id="pig0"
                age="8mths"
                weight="45kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoor={this.fadeInDoor}
              />
            </Draggable>
            <Draggable type="pig" data="pig1">
              {' '}
              <Pig
                id="pig1"
                age="9mths"
                weight="65kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoor={this.fadeInDoor}
              />
            </Draggable>
            <Draggable type="pig" data="pig2">
              {' '}
              <Pig
                id="pig2"
                age="10mths"
                weight="55kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoor={this.fadeInDoor}
              />
            </Draggable>
            <Draggable type="pig" data="pig3">
              {' '}
              <Pig
                id="pig3"
                age="11mths"
                weight="43kg"
                health="healthy"
                updateJumbotronHandler={this.updateJumbotron}
                fadeInDoor={this.fadeInDoor}
              />
            </Draggable>
          </div>
          <Droppable
            align="center"
            types={['pig']} // <= allowed drop types
            // onDrop={this.onDrop.bind(this)}>
            onDrop={this.toggle}
          >
            <div
              className="door"
              style={{
                border: '3px solid red',
                opacity: this.state.doorVisibile
              }}
            />
          </Droppable>
        </div>
      </Fade>
    );
  }
}