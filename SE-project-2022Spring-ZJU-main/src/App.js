import React from "react";
import { useState } from "react";
import { render } from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch

  // useLocation,
} from "react-router-dom"; //with Switch, only first in order will match
// import { useEffect, useState } from "react";
import { LoginInterface } from "./loginInterface/index.jsx";
// import { Register } from "./loginInterface/register.jsx";
import { PrivateRoute } from "./PrivateRoute/PrivateRoute.jsx";
import { Nav } from "./Nav/Nav.jsx";
import PMainPage from "./Modules/My/patient/patient.jsx";
import DMainPage from "./Modules/My/doctor/doctor.jsx";
import Profile from "./Modules/Profile/index.jsx";
import DMyImages from "./Modules/MyImages/index.jsx";
// import ReactUploadImage from "./Modules/ImageUpload/ReactUploadImage";
import ImageUpload from "./Modules/ImageUpload/index.jsx";
import Missions from "./Modules/Missions/index.jsx";
import TakeMissions from "./Modules/TakeMissions/index.jsx";
import MissionStatus from "./Modules/MissionStatus/index.jsx";
import LabelPage from "./Modules/LabelPage/index.jsx";
import history from "./history.js";
import Appointment from "./Modules/Appointment/appointment.jsx";
import Myappointment from "./Modules/My/patient/myappointment.jsx";
import Myhistory from "./Modules/My/patient/myhistory.jsx";
import Calindar from "./Modules/My/doctor/calindar.jsx";
import Patientsdata from "./Modules/My/doctor/patientsdata.jsx";
import Search from "./Modules/Search/Search.jsx";
import Home from "./Modules/Home/home.jsx";
import Introduce from "./Modules/Introduce/introduce.jsx";
import Edit from "./Modules/My/doctor/edit.jsx";
import Prescription from "./Modules/My/doctor/prescription.jsx";
import Detail from "./Modules/doctorCard/detail.jsx";
import { Init } from "./loginInterface/Init.jsx";
import Admin from "./Modules/admin/index.jsx";
// import { StrictMode } from "react";
// import "../styles.less";
// import * as yup from "yup";

function App() {
  // const { pathname } = useLocation();
  // const [user, setUser] = useState();
  // const [token, setToken] = useState({});
  const [role, setRole] = useState("");

  return (
    <Router history={history}>
      <div className="app-container">
        <Nav role={role} />
        <Switch>
          <PrivateRoute path="/admin" component={Admin} />
          <PrivateRoute
            path="/profile"
            component={Profile}
            // role={localStorage.getItem("role")}
          />
          {/* TODO */}
          {/* <Route path="/myimages" component={MyImages} /> */}
          {/* 医院介绍；无需登录 */}
          <PrivateRoute path="/upload" component={ImageUpload} />
          <PrivateRoute path="/createmissions" component={Missions} />
          <PrivateRoute path="/takemissions" component={TakeMissions} />
          <PrivateRoute path="/missionstatus" component={MissionStatus} />
          <PrivateRoute path="/label" component={LabelPage} />
          <PrivateRoute path="/appointment" component={Appointment} />
          <PrivateRoute path="/myappointment" component={Myappointment} />
          <PrivateRoute path="/myhistory" component={Myhistory} />
          <PrivateRoute path="/calindar" component={Calindar} />
          <PrivateRoute path="/patientsdata" component={Patientsdata} />
          <PrivateRoute path="/introduce" component={Introduce} />
          <PrivateRoute path="/search" component={Search} />
          <PrivateRoute path="/home" component={Home} />
          <Route path="/edit/:id" component={Edit}></Route>
          <Route path="/prescription/:id" component={Prescription}></Route>
          <Route path="/detail/:id" component={Detail}></Route>
          {localStorage.getItem("role") === "doctor" && (
            <PrivateRoute path="/my" component={DMainPage} />
          )}
          {localStorage.getItem("role") === "patient" && (
            <PrivateRoute path="/my" component={PMainPage} />
          )}
          {/* <PrivateRoute path="/logout"></PrivateRoute> */}
          <div className="container">
            <div className="row">
              <div className="col-sm-8 offset-sm-2 mt-5">
                <div className="card m-3"></div>
                <Route path="/login">
                  <LoginInterface setRole={setRole} />
                </Route>
              </div>
            </div>
          </div>
          <Route path="*" component={Init} />
        </Switch>
      </div>
    </Router>
  );
}

render(<App />, document.getElementById("root"));
