import React from 'react';
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState(prevState => ({
      dropdownOpen: !prevState.dropdownOpen
    }));
  }

  render() {
    return (
      <Dropdown
        isOpen={this.state.dropdownOpen}
        toggle={this.toggle}
        id="dropdown1"
      >
        <DropdownToggle id="show-stunners" caret>
          Tools
        </DropdownToggle>
        <DropdownMenu>
          <DropdownItem header>Head Slam (default)</DropdownItem>
          {/* <DropdownItem divider /> */}
          <DropdownItem>Club or Poleaxe</DropdownItem>
          <DropdownItem>Slaughtering Mask</DropdownItem>
          <DropdownItem>Gas Chamber</DropdownItem>
        </DropdownMenu>
      </Dropdown>
    );
  }
}
