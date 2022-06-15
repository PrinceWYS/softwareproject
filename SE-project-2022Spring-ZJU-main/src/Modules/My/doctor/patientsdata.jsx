import "../my.css"
import React from 'react'
import { useState, useEffect } from 'react'
import Axios from 'axios'
import { Link } from "react-router-dom"

export default function Patientsdata() {

    const [src, setSrc] = useState([]);

    useEffect(() => {
        const path = "http://localhost:3000/medicalrecords/";
        // let cancelled = false;
        LoadMedicalRecords(path, setSrc);
        // console.log(src);
    }, []);

    return (
        <div width="100%">
        <div width="100%">
            <div className="tab">
                <br></br><br></br>
                <h1 align="center">我的患者</h1>
                <table className="table table-bordered">
                <tr>
                    <td colSpan="6" align="center"><strong>患者信息</strong></td>
                </tr>
                <tr>
                    <td width="10%">姓名</td>
                    {/* <td width="10%">年龄</td> */}
                    <td width="10%">性别</td>
                    <td width="20%">病情简介</td>
                    <td width="30%">建议</td>
                    <td width="20">药单</td>
                    <td width="20">编辑病历</td>
                </tr>
                {src && src.map((item, index) => 
                    {return (
                        <tr key={index}>
                            <td>{item.patient_name}</td>
                            {/* <td></td>
                            <td></td> */}
                            {/* <td>{item.patient_age}</td> */}
                            <td>{item.patient_gender}</td>
                            <td name="description">
                                {item.illDescription}
                            </td>
                            <td name="advice">
                                {item.medical_advice}
                            </td>
                            <td>
                                <Link to={"./prescription/"+item.MR_id}>开药单</Link>
                            </td>
                            <td>
                                <Link to={"./edit/"+item.MR_id}>编辑</Link>
                            </td>
                        </tr>
                    )
                })}
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

function LoadMedicalRecords(path, setSrc) {
    Axios.get(path, {
        params: {doctor_ID: localStorage.getItem('token')}
    })
        .then(function (response) {
            console.log(response.data);
            setSrc(response.data.res);
        })
        .catch(function (error) {
            console.log(error);
        });
}
