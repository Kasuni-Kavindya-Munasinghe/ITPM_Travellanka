// import logo from './logo.svg';
// import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {BrowserRouter as Router, Route, Switch,} from 'react-router-dom';
//import SideMenu from "./component/SideMenuComponent/SideMenu";

import DoctorAdd from "./component/DoctorComponent/DoctorAddComponent/DoctorAdd";
import DoctorAllView from "./component/DoctorComponent/DoctorAllViewComponent/DoctorAllView";
import DoctorUpdate from "./component/DoctorComponent/DoctorUpdateComponent/DoctorUpdate";
import DoctorScheduleAdd from "./component/DoctorComponent/DoctorScheduleAdd/DoctorScheduleAdd";
import DoctorScheduleView from "./component/DoctorComponent/DoctorScheduleViewComponent/DoctorScheduleView";
import DoctorMain from "./component/DoctorComponent/DoctorMainComponent/DoctorMain";
import DoctorAdminMain from "./component/DoctorComponent/DoctorAdminMainComponent/DoctorAdminMain";
import DoctorSearch from "./component/DoctorComponent/DoctorSearchComponent/DoctorSearch";
import DoctorScheduleSearch from "./component/DoctorComponent/DoctorScheduleSearchComponent/DoctorScheduleSearch";

import footer from "./component/DoctorComponent/footer/footer";


function App() {
  return (
    <div>
      <Router>
        <Switch>
          
          <Route extract path = '/DoctorAdd' component={DoctorAdd}/>
          <Route extract path = '/DoctorAllView' component={DoctorAllView}/>
          <Route extract path = '/DoctorUpdate/:id' component={DoctorUpdate}/>


           <Route extract path = '/footer' component={footer}/>       
                   
                  
          <Route extract path = '/DoctorScheduleAdd' component={DoctorScheduleAdd}/>
          <Route extract path = '/DoctorScheduleView' component={DoctorScheduleView}/>
          <Route extract path = '/DoctorMain' component={DoctorMain}/>
          <Route extract path = '/DoctorAdminMain' component={DoctorAdminMain}/>
          <Route extract path = '/DoctorSearch' component={DoctorSearch}/>
          <Route extract path = '/DoctorScheduleSearch' component={DoctorScheduleSearch}/>
          
          
        </Switch>
      </Router>      
    </div>
  );
}

export default App;
