import React, { Component } from "react";
// import logo from '../images/logo.png'
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Collapse,
  NavItem,
  Jumbotron,
} from "reactstrap";
import { NavLink } from "react-router-dom";

class MHeader extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
    };
  }

  toggleNav() {
    this.setState({
      isNavOpen: !this.state.isNavOpen,
    });
  }

  render() {
    return (
      <div>
        <Navbar dark expand="md" className="fixed-top">
          <div className="container">
            <NavbarToggler onClick={this.toggleNav} />
            <NavbarBrand className="mr-auto" href="/">
              <img
                src={logo}
                height="30"
                width="41"
                alt="Dekma Institute Matara"
              />
            </NavbarBrand>
            <NavbarBrand href="/">Class Management System</NavbarBrand>
            <Collapse isOpen={this.state.isNavOpen} navbar>
              <Nav navbar>
                <NavItem>
                  <NavLink className="nav-link" to="/home">
                    <span className="fa fa-home fa-lg"></span> Home
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/menu">
                    <span className="fa fa-list fa-lg"></span> Menu
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/aboutus">
                    <span className="fa fa-info fa-lg"></span> About Us
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink className="nav-link" to="/contactus">
                    <span className="fa fa-address-card fa-lg"></span> Contact
                    Us
                  </NavLink>
                </NavItem>
              </Nav>
              <Nav navbar className="ml-auto">
                <NavItem>
                  <NavLink className="nav-link" to="/login">
                    <span className="fa fa-sign-in fa-lg"></span> Login
                  </NavLink>
                </NavItem>
              </Nav>
            </Collapse>
          </div>
        </Navbar>
        <Jumbotron>
          <div className="container">
            <div className="row row-header">
              <div className="col-12 col-sm-8">
              <h1>DEKMA Institute Matara</h1>
                <p>
                Founded by Janaka Abeywardana in 2006, today, Dekma Higher Educational Institute has 
                become the foremost learning center for the highest number of advanced level students in 
                the Southern Province in Sri Lanka. Every year its students top the ranking in island’s A/L 
                Examination but not limiting to that, the Institute also ensures its students are well 
                disciplined, nature loving, creative humans who are ready to step out into the society. 
                Thus the theme, “Education along with Humanity” at Dekma Higher Educational Institute.
                </p>
              </div>
              <div class="col-12 offset-sm-1 col-sm align-self-center">
                <img
                  src={logo}
                  alt="logo"
                  height="250"
                  width="241"
                  class="img-fluid"
                ></img>
              </div>
            </div>
          </div>
        </Jumbotron>
      </div>
    );
  }
}

export default MHeader;