import React from "react";
import { Navbar, Nav, NavDropdown, Container } from "react-bootstrap";
import '../dashboard/Dashboard.css'

const UserDashboardNavbar = () => {
    return (
      <Container fluid className="dashboard-container">
        <Navbar bg="light" expand="lg" className="dashboard-navbar">
          <Navbar.Brand >My Profile</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto div">
              <NavDropdown
                title="Helpmate Dashboard"
                id="basic-nav-dropdown"
                className="dashboard-nav-dropdown"
              >
                <NavDropdown.Item >Activity</NavDropdown.Item>
                <NavDropdown.Item >
                  Settings and privacy
                </NavDropdown.Item>
                <NavDropdown.Item >Manage Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >
                  Help and support
                </NavDropdown.Item>
                <NavDropdown.Item >
                  Give feedback
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item >Log Out</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
};

export default UserDashboardNavbar;
