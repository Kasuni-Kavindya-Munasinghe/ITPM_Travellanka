// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
//import SideMenu from "./component/SideMenuComponent/SideMenu";


import addhotel from "./component/HotelComponent/addhotel/addhotel";
import viewhotel from "./component/HotelComponent/viewhotel/viewhotel";
import updatehotel from "./component/HotelComponent/updatehotel/updatehotel";
import searchhotel from "./component/HotelComponent/searchhotel/searchhotel";
import mainhotel from "./component/HotelComponent/mainhotel/mainhotel";

import footer from "./component/HotelComponent/footer/footer";

import Generatereport from "./component/HotelComponent/Generatereport/Generatereport";


import login from "./component/HotelComponent/login/login";


function App() {
  return (
    <div>
      <Router>
        <Switch>
       
          <Route extract path = '/addhotel' component={addhotel}/>
          <Route extract path = '/viewhotel' component={viewhotel}/>
          <Route extract path = '/updatehotel/:id' component={updatehotel}/>
          <Route extract path = '/searchhotel' component={searchhotel}/>
          <Route extract path = '/mainhotel' component={mainhotel}/>

          <Route extract path = '/footer' component={footer}/>

          <Route extract path = '/Generatereport' component={Generatereport}/>

          <Route extract path = '/login' component={login}/>
          
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
