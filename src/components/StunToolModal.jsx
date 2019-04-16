//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class StunToolModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, goToBleed: false };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

  proceed = () => {
    // alert(this.props.id);
    this.props.goToBleed();
    this.toggle();
    window.location.assign(
      'https://www.figma.com/proto/x16vcW37yugGKZ1re2ZTmd/LikeUs?node-id=0%3A1&scaling=contain'
    );
    // alert(this.state.goToBleed);
  };

  render() {
    return (
      <div>
        <Button outline color="warning" onClick={this.toggle}>
          <img
            style={{ display: 'block' }}
            className="kill-tools"
            src={this.props.whichToolImg}
          />
        </Button>
        <Modal isOpen={this.state.modal}>
          <form onSubmit={this.handleSubmit}>
            <ModalHeader>{this.props.toolName}</ModalHeader>
            <ModalBody>
              {this.props.toolInfo}
              {this.props.toolImg}
            </ModalBody>
            <ModalFooter>
              <Button color="warning" onClick={this.proceed}>
                Proceed
              </Button>
              <Button color="secondary" onClick={this.toggle}>
                Back
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
