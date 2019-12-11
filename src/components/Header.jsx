import React, { Component } from 'react';
import {
  Navbar, NavDropdown, Nav,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link as={Link} to="/">Trang Chủ</Nav.Link>
            <Nav.Link as={Link} to="/about">Giới thiệu</Nav.Link>
          </Nav>
          <Nav className="ml-auto">
            <NavDropdown alignRight id="basic-nav-dropdown">
              <NavDropdown.Item>
                <h6 className="text-center">Fullname</h6>
                <p className="text-center">Email</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Cài đặt</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/info">Thông tin cá nhân</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/logout">Đăng xuất</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Header;
