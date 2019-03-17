import React, { Component } from 'react';
export default class Tool extends Component {
  selectedTool = '';
  examineTool = e => {
    // this.selectedPig = e.target.id;
    // alert(this.props.id);
  };

  updateJumbotron = e => {
    // console.log(this.props.age);
    // console.log(this.props.weight);
    // console.log(this.props.status);
    let toolStatus = {
      lead: this.props.lead
      //   weight: this.props.weight,
      //   health: this.props.health
    };
    // let showDoor = true;

    // this.props.updateJumbotronHandler(pigStatus);
    // this.props.fadeInDoorHandler(showDoor);
  };
  render() {
    return (
      <div
        className="tool"
        style={{
          backgroundImage: this.props.src,

          border: '2px solid blue'
        }}
        // onMouseOver={this.updateJumbotron}
        // onClick={this.examineTool}
      >
        <p>{this.props.ToolName}</p>
      </div>
    );
  }
}
