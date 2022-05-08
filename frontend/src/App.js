import './App.css';
import HotelSideMenu from './component/Header';

import Addcamping from './component/Addcamping';
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import EditCamping from './component/ViewCamping';
//import UpdateCamping from './component/UpdateCamping';
import CampingHome from './component/CampingHome';

import Footer from './component/Footer';

// import MHeader from './component/HeaderComponent';

// import Menu from './component/MenuComponent';
import updateCamping from './component/UpdateCamping';
function App() {
  return (
    <Router>
    <div>
      {/* <Menu/> */}
     <HotelSideMenu/> 
     <Switch>
     <Route path = "/add" exact component = {Addcamping}/>
     <Route path = "/listS" exact component = {EditCamping}/>
      <Route path = "/updateCamping/:id" exact component = {updateCamping}/>
      <Route path="/shome" exact component={CampingHome}/>
      <Route path="/" exact component={CampingHome}/>
    </Switch>
    <Footer/> 
    </div>
    </Router>
  );
}

export default App;
