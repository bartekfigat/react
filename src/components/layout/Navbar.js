import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { Navbar, Nav, NavItem } from "react-bootstrap";

class NavBar extends Component {
  render() {
    return (
      <Navbar>
        <Navbar.Header>
          <Navbar.Brand>Web Mentors</Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem>
            <NavLink to="/teamPage">Team Page</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    );
  }
}

export default NavBar;
