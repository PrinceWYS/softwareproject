import React from 'react'
import './search.css'

export default function Search () {
    return (
        <div width="100%">
            <div width="100%">
                <br></br>
                <h1 align="center">搜索</h1>
                <div className='bod'>
                    <div class="input-group">
                        <input type="text" class="form-control"/>
                        <div class="input-group-btn">
                            <select class="btn btn-info btn-block btn-lg" onchange="selectOnchang(this)">
                                <option>所有科室</option>
                                <option>科室A</option>
                                <option>科室B</option>
                                <option>科室C</option>
                            </select>
                        </div>
                        <br></br>
                    </div>
                    <button className='btn btn-success'>搜索</button>
                </div>

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