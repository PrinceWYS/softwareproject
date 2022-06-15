import Address from "./address"
import "./introduce.css"
export default function Menu4 () {
    return (
        <div className="container">
            <h3>医院交通</h3>
            <hr className="div"></hr>
            <ul class="nav nav-tabs ulc" role="tablist">
                <li class="nav-item icmt">
                <a class="nav-link disabled"><strong>医院导航</strong></a>
                </li>
                <li class="nav-item itmc">
                <a class="nav-link active" data-toggle="tab" href="#mapmap">地图导航</a>
                </li>
                <li class="nav-item itmc">
                <a class="nav-link" data-toggle="tab" href="#store">周边商户</a>
                </li>
                <li class="nav-item itmc">
                <a class="nav-link" data-toggle="tab" href="#route">公交路线</a>
                </li>
                <li class="nav-item itmc">
                <a class="nav-link" data-toggle="tab" href="#way">应急通道</a>
                </li>
            </ul>

            <div class="tab-content">
                <div id="mapmap" class="container tab-pane active"><br/>
                <h3>医院导航</h3>
                <Address />
                </div>
                <div id="store" class="container tab-pane fade"><br/>
                    <ul className="nav" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" data-toggle="tab" href="#hotel">酒店</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#bank">银行</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#supermarket">超市</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" data-toggle="tab" href="#restrant">餐饮</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <figure id="hotel" className="tab-pane active fi">
                            <img src={require('./pic/hotel.png')} width="600px"></img>
                            <figcaption align="center">酒店</figcaption>
                        </figure>
                        <figure id="bank" className="tab-pane fi">
                            <img src={require('./pic/bank.png')} width="600px"></img>
                            <figcaption align="center">银行</figcaption>
                        </figure> 
                        <figure id="supermarket" className="tab-pane fi">
                            <img src={require('./pic/supermarket.png')} width="600px"></img>
                            <figcaption align="center">超市</figcaption>
                        </figure>
                        <figure id="restrant" className="tab-pane fi">
                            <img src={require('./pic/restrant.png')} width="600px"></img>
                            <figcaption align="center">餐饮</figcaption>
                        </figure>
                    </div>
                </div>
                <div id="route" class="container tab-pane fade"><br/>
                    <h3 align="center">公交路线</h3><br></br>
                    <p align="center">（请注意公交线路是否有变动，如有变动，以公交站牌显示路线为准）</p>
                    <p>
                        可乘坐公交K186路、62路、517路、K517（区间）路、18/K18路、208（夜间线）路、401路、45/K45路、591路、30路、30（大站线）路、68/K68路、14/K14路、60/K60路、212（夜间线）路、207（夜间线）路、31路、111路在浙一医院站下。
                    </p>
                    <div align="center">
                    <img src={require("./pic/bus.jpg")}></img>
                    </div>
                </div>
                <div id="way" class="container tab-pane fade"><br/>
                    <ul class="nav" role="tablist">
                        <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#p1">一号楼</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#p2">二号楼</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#p3">综合楼</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#p4">服务楼</a>
                        </li>
                    </ul>
                    <div className="tab-content">
                        <figure id="p1" className="tab-pane active">
                            <img src={require('./pic/1.jpg')}></img>
                            <figcaption align="center">一号楼</figcaption>
                        </figure>
                        <figure id="p2" className="tab-pane">
                            <img src={require('./pic/2.jpg')}></img>
                            <figcaption align="center">二号楼</figcaption>
                        </figure>
                        <figure id="p3" className="tab-pane">
                            <img src={require('./pic/3.jpg')}></img>
                            <figcaption align="center">综合楼</figcaption>
                        </figure>
                        <figure id="p4" className="tab-pane">
                            <img src={require('./pic/4.jpg')}></img>
                            <figcaption align="center">服务楼</figcaption>
                        </figure>
                    </div>
                </div>
            </div>
        </div>
    )
}