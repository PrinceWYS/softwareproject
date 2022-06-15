import "./introduce.css"
import Header from "./header"
import React from "react"

import Home from "./home"
import Menu1 from "./menu1"
import Menu2 from "./menu2"
import Menu3 from "./menu3"
import Menu4 from "./menu4"
import Menu5 from "./menu5"
import Menu6 from "./menu6"

export default function Introduce () {
    return (
        <div width="100%">
            <div width="100%">
                <div className="main">
                <img src={require('../../pic/intro.png')} width="97%"></img>
                </div>
                <div className="media intro">
                    {/**导航栏 */}
                    <ul class="nav nav-tabs flex-column map">
                        <li class="nav-item ">
                            <a class="nav-link active mapli" data-toggle="tab" href="#home">医院简介</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mapli" data-toggle="tab" href="#menu1">科室简介</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mapli" data-toggle="tab" href="#menu2">医生简介</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mapli" data-toggle="tab" href="#menu3">组织结构</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mapli" data-toggle="tab" href="#menu4">医院交通</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mapli" data-toggle="tab" href="#menu5">院内导航</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link mapli" data-toggle="tab" href="#menu6">高新设备</a>
                        </li>
                    </ul>
                    {/**内容栏 */}
                    <table className="table-bordered ta">
                    <div class="tab-content content">
                        <div id="home" class="tab-pane active">
                            {Header("医院简介")}
                            <Home />
                        </div>
                        <div id="menu1" class="tab-pane fade">
                            {Header("科室简介")}
                            <Menu1 />
                        </div>
                        <div id="menu2" class="tab-pane fade">
                            {Header("医生简介")}
                            <Menu2 />
                        </div>
                        <div id="menu3" class="tab-pane fade">
                            {Header("组织结构")}
                            <Menu3 />
                        </div>
                        <div id="menu4" class="tab-pane fade">
                            {Header("医院交通")}
                            <Menu4 />
                        </div>
                        <div id="menu5" class="tab-pane fade">
                            {Header("院内导航")}
                            <Menu5 />
                        </div>
                        <div id="menu6" class="tab-pane fade">
                            {Header("高新设备")}
                            <Menu6 />
                        </div> 
                    </div>
                    </table>
                </div>
                <br></br><br></br>
                {/*底部联系方式栏*/}
                <div className='bottom'>
                    <div className='media connect' style={{width:'100%'}}>
                        <div className='media-body picss'>
                        <img src={require('../../pic/logo.png')} style={{width:'30%'}}></img>
                        </div>
                        <div className='media-body tess'>
                        <br></br><br></br>
                        <p className>地址: 浙江省杭州市**区**路***号</p>
                        <p>联系电话: +86-571-87953025</p>
                        <p>传真: +86-571-87953025</p>
                        </div>
                        <div className='media-body picss2'>
                            <img src={require('../../pic/qrcode.png')} style={{width:'30%'}}></img>
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
