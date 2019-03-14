import React from 'react';
import {
  Container,
  Row,
  Col,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  toggleCollapse = () => {
    this.props.toggleCollapse();
    if (this.state.modal) this.toggle();
  };
  okClick = () => {};
  render() {
    return (
      <Container>
        {' '}
        <Row>
          <Col xs="6" sm="4">
            <Button
              className="btn-block"
              color="secondary"
              size="lg"
              onClick={this.toggleCollapse}
            >
              Run
            </Button>
          </Col>
          <Col xs="6" sm="4" />
          <Col sm="4">
            <Button
              className="btn-block"
              color="secondary"
              size="lg"
              onClick={this.toggle}
            >
              Explain
            </Button>
          </Col>
        </Row>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>
            Most reasonable people would never deliberately harm an animal.{' '}
          </ModalHeader>
          <ModalBody>
            Yet the meat industry can barely keep up with demand. This is
            madness. When we are informed, and when we are reasonable, animals
            likeUs choose compassionate alternatives.
          </ModalBody>
          <ModalFooter
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center'
            }}
          >
            <Button color="secondary" onClick={this.toggleCollapse}>
              Okay
            </Button>
          </ModalFooter>
        </Modal>
      </Container>
    );
  }
}
