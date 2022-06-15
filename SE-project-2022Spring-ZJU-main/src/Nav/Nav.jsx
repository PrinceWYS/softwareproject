import React from 'react';
import { NavLink } from 'react-router-dom';

// import { Role } from '@/_helpers';
// import { accountService } from '@/_services';
// import CondNav from './Conditional-doc-patient';
import DoctorNav from './DoctorNav';
import PatientNav from './PatientNav';
import "./navcss.css"

function Nav({role}) {
    return (
        <div>
            <nav className="navbar navbar-expand navbar-light bg-info">
                <div className="navbar-nav navb">
                    <a href='http://localhost:1234/home'>
                    <img src={require("../pic/logo.png")} width="150%"></img>
                    </a>
                    <div className='sblan'></div>
                    <NavLink to="/home" className="nav-item nav-link text-white navi">首页</NavLink>
                    <NavLink to="/introduce" className="nav-item nav-link text-white navi">简介</NavLink>
                    <NavLink to="/search" className="nav-item nav-link text-white navi">搜索</NavLink>
                    {/* <NavLink to="/myimages" className="nav-item nav-link text-white">My Images</NavLink>
                    <NavLink to="/upload" className="nav-item nav-link text-white">Upload</NavLink>
                    <NavLink to="/createmissions" className="nav-item nav-link text-white">Create Missions</NavLink>
                    <NavLink to="/takemissions" className="nav-item nav-link text-white">Take Missions</NavLink>
                    <NavLink to="/missionstatus" className="nav-item nav-link text-white">Mission Status</NavLink> */}
                    
                    <input type="text" className="form-control sear" placeholder="搜索"></input>
                    <div className='blan'></div> 
                    <NavLink to="/login" onClick={() => {
                        localStorage.removeItem('token');
                        localStorage.removeItem('role');
                        alert("Goodbye.");
                        }} className="nav-item nav-link text-white navi">
                        登出
                    </NavLink>
                    {/* <CondNav role={role} setRole={setRole}/> */}
                    {localStorage.getItem('role') === 'doctor' && <DoctorNav/>}
                    {localStorage.getItem('role') === 'patient' && <PatientNav/>}
                    
                </div>
            </nav>

        </div>
    );
}

export { Nav }; 
