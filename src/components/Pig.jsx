import React, { Component } from 'react';

export default class Pig extends Component {
  selectedPig = '';
  examinePig = e => {
    // this.selectedPig = e.target.id;
    // alert(this.props.id);
  };

  updateJumbotron = e => {
    // console.log(this.props.age);
    // console.log(this.props.weight);
    // console.log(this.props.status);
    let pigStatus = {
      age: this.props.age,
      weight: this.props.weight,
      health: this.props.health
    };
    let showDoor = true;

    this.props.updateJumbotronHandler(pigStatus);
    this.props.fadeInDoorHandler(showDoor);
  };
  render() {
    return (
      <div
        className="pig"
        onMouseOver={this.updateJumbotron}
        onClick={this.examinePig}
      />
    );
  }
}
