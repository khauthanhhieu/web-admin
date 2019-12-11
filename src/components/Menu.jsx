import React, { Component } from 'react';
import {
  Navbar, NavDropdown, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Menu extends Component {
  render() {
    return (
      <Nav defaultActiveKey="/home" className="flex-column">
        <Nav.Link href="/home">Active</Nav.Link>
        <Nav.Link eventKey="link-1">Link</Nav.Link>
        <Nav.Link eventKey="link-2">Link</Nav.Link>
        <Nav.Link eventKey="disabled" disabled>
          Disabled
        </Nav.Link>
      </Nav>
    )
  }
}

export default Menu;
