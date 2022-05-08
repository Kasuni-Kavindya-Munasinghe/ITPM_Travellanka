import React from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Nav,
  Navbar,
  NavItem,
} from "reactstrap";

import { NavLink } from "react-router-dom";

function RenderMenuItem({ item, onClick }) {
  return (
    <Card onClick={() => onClick(item.id)}>
      <CardImg width="100%" height="280px" src={item.image} alt={item.name} />
      <CardImgOverlay>
        <CardTitle>{item.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
}

function RenderSideBar(props) {
  return (
    <Navbar>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link" to="/students">
            <i class="fa fa-graduation-cap" aria-hidden="true"></i> Student
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-briefcase" aria-hidden="true"></i> Staff
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-pencil-square-o" aria-hidden="true"></i> Exams
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-book" aria-hidden="true"></i> Subjects
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-bars" aria-hidden="true"></i> Library
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-usd" aria-hidden="true"></i> Finance
          </NavLink>
          <NavLink className="nav-link" to="/createTimetable">
            <i class="fa fa-university" aria-hidden="true"></i> Timetable
          </NavLink>
          <NavLink className="nav-link" to="/home">
            <i class="fa fa-bell" aria-hidden="true"></i> Notices
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
}

const Menu = (props) => {
  const menu = props.items.map((item) => {
    return (
      <div className="col-12 col-md-5 m-1" key={item.id}>
        <RenderMenuItem item={item} onClick={props.onClick} />
      </div>
    );
  });

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-sm-2">
          <RenderSideBar />
        </div>
        <div className="col-12 col-sm-10">
          <div className="row"> {menu}</div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
