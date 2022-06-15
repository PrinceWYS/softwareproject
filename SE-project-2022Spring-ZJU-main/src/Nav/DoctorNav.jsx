import React from 'react';
import { NavLink } from 'react-router-dom';
import "./navcss.css"
export default function DoctorNav () {
    return (
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle text-white navi" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">个人中心</a>
            <div className="dropdown-menu">
                <NavLink to="/my" className="nav-item nav-link dropdown-item">
                   个人信息 
                </NavLink>
                <div className="dropdown-divider"></div>
                <NavLink to="/calindar" className="nav-item nav-link dropdown-item">
                    我的日程    
                </NavLink>
                <NavLink to="/patientsdata" className="nav-item nav-link dropdown-item">
                    我的患者    
                </NavLink>
            </div>
        </li>
    )
}
