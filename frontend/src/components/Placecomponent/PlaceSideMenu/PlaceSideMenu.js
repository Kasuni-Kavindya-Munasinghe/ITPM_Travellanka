import React,{Component} from "react";
import './PlaceSideMenu';


export default class PlaceSideMenu extends Component {
    render() {
      return (
          <div align="left" className = "Sidenav">
          <nav className= "Navbar">
            
            <a className="nav-link" href="/addplace">Add Place</a>
            <a className="nav-link" href="/viewplace">View Added</a>
            <a className="nav-link" href="#">Update</a>
              
          </nav>
        </div>
        
      )
    }
  }
  