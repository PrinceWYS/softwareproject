import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navcss.css"
export default function PatientNav () {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white navi" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">个人中心</a>
            <div className="dropdown-menu">
                <NavLink to="/my" className="nav-item nav-link dropdown-item">
                    个人信息
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/appointment" className="nav-item nav-link dropdown-item">
                    立即预约   
                </NavLink>
                <NavLink to="/myappointment" className="nav-item nav-link dropdown-item">
                    我的预约   
                </NavLink>
                <NavLink to="/myhistory" className="nav-item nav-link dropdown-item">
                    我的病历   
                </NavLink>  
            </div>
        </li>
    )
}
