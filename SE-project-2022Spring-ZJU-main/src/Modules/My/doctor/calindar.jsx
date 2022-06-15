import "../my.css"
import React, { useEffect, useState } from 'react'
import Axios from "axios";

export default function Calindar () {

    const [tasks, setTasks] = useState([])
    const weekdays = ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"];

    useEffect(() => {
        // Load the doctor's agenda from database
        const path = "http://localhost:3000/doctor/calindar/";
        LoadCalindar(path, setTasks);
    }, []);

    return (
        <div width="100%">
        	<div width="100%">
        		<div className="tab">
                    <br></br><br></br>
                    <table class="table table-hover table-bordered">
                    <thead>
                        <tr>
                            <td align="center" colSpan="8" className="textta"><strong>个人日程</strong></td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td></td>
                            <td width="13.5%">周日</td>
                            <td width="13.5%">周一</td>
                            <td width="13.5%">周二</td>
                            <td width="13.5%">周三</td>
                            <td width="13.5%">周四</td>
                            <td width="13.5%">周五</td>
                            <td width="13.5%">周六</td>
                        </tr>
                        <tr>
                            <td>8:00-9:45</td>
                            {
                                weekdays.map((day, index) => {
                                    return (
                                        <td key={index}>
                                            {tasks && tasks.map(task => {
                                                // console.log(task)
                                                const date = new Date(task.cal_day)
                                                const today = new Date()
                                                // console.log(date >= today)
                                                // console.log(date.getDay() == index)
                                                // console.log(task.cal_num == 800945)
                                                if (date >= today && date.getDay() == index && task.cal_num == 800945) {
                                                    return (
                                                        <div key={index}>
                                                            <p>{task.patient_name}</p>
                                                            <p>{task.description}</p>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>10:15-12:00</td>
                            {
                                weekdays.map((day, index) => {
                                    return (
                                        <td key={index}>
                                            {tasks && tasks.map(task => {
                                                if (Date(task.cal_day) > Date() && Date(task.cal_day).getDay() == index && task.cal_num == 10151200) {
                                                    return (
                                                        <div key={index}>
                                                            <p>{task.patient_name}</p>
                                                            <p>{task.description}</p>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>14:00-15:15</td>
                            {
                                weekdays.map((day, index) => {
                                    return (
                                        <td key={index}>
                                            {tasks && tasks.map(task => {
                                                if (Date(task.cal_day) > Date() && Date(task.cal_day).getDay() == index && task.cal_num == 14001515) {
                                                    return (
                                                        <div key={index}>
                                                            <p>{task.patient_name}</p>
                                                            <p>{task.description}</p>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                        <tr>
                            <td>15:45-17:30</td>
                            {
                                weekdays.map((day, index) => {
                                    return (
                                        <td key={index}>
                                            {tasks && tasks.map(task => {
                                                if (Date(task.cal_day) > Date() && Date(task.cal_day).getDay() == index && task.cal_num == 15451730) {
                                                    return (
                                                        <div key={index}>
                                                            <p>{task.patient_name}</p>
                                                            <p>{task.description}</p>
                                                        </div>
                                                    )
                                                }
                                            }
                                            )}
                                        </td>
                                    )
                                })
                            }
                        </tr>
                    </tbody>
                    </table>
                </div>

                {/*底部联系方式栏*/}
		<div className='bottom'>
                    <div className='media connect' style={{width:'100%'}}>
                        <div className='media-body picss'>
                        <img src={require('../../../pic/logo.png')} style={{width:'30%'}}></img>
                        </div>
                        <div className='media-body tess'>
                        <br></br><br></br>
                        <p className>地址: 浙江省杭州市**区**路***号</p>
                        <p>联系电话: +86-571-87953025</p>
                        <p>传真: +86-571-87953025</p>
                        </div>
                        <div className='media-body picss2'>
                            <img src={require('../../../pic/qrcode.png')} style={{width:'30%'}}></img>
                        </div>
                    </div>
                    <div className='copyright'>
                        <p>Copyright © 2022 浙江大学软件工程SE6组 版权所有</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

function LoadCalindar(path, setTasks) {
    Axios.get(path, {params: {doctor_ID: localStorage.getItem('token')}})
        .then(res => {
            console.log(res.data.res);
            setTasks(res.data.res);
            // res.data should contain:
            // {cal_day -> cal_day, cal_num -> cal_num, patient_name, description}
        })
}
