//ModalComponent.js
import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

export default class StunToolModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, name: '', team: '', country: '' };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }
  handleChangeName(event) {
    this.setState({ name: event.target.value });
  }
  handleChangeTeam(event) {
    this.setState({ team: event.target.value });
  }
  handleChangeCountry(event) {
    this.setState({ country: event.target.value });
  }

  handleSubmit(event) {
    event.preventDefault();
  }

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
              <input
                type="submit"
                value="Submit"
                color="primary"
                className="btn btn-primary"
              />
              <Button color="danger" onClick={this.toggle}>
                Cancel
              </Button>
            </ModalFooter>
          </form>
        </Modal>
      </div>
    );
  }
}
