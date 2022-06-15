import "./introduce.css"

export default function Menu5 () {
    return (
        <div className="container">
            <h3>院内导航</h3>
            <hr className="div"></hr>
            <ul class="nav nav-pills" role="tablist">
                <li class="nav-item">
                <a class="nav-link active" data-toggle="pill" href="#map">平面地图</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#b1">一号楼</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#b2">二号楼</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#syn">综合楼</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" data-toggle="pill" href="#ser">服务楼</a>
                </li>
            </ul>
            <hr className="div"></hr>
            <div class="tab-content">
                <div id="map" class="container tab-pane active"><br/>
                <h3>平面地图</h3>
                <div className="jumbotron">
                    <img src={require('./pic/floor.jpg')}></img>
                </div>
                </div>
                <div id="b1" class="container tab-pane fade"><br/>
                <h3>一号楼</h3>
                <hr></hr>
                <p>
                    一楼：内科 妇产科 呼吸科<br></br>
                    二楼：骨科 肿瘤科<br></br>
                    三楼：外科 皮肤科 儿科
                </p>
                </div>
                <div id="b2" class="container tab-pane fade"><br/>
                <h3>二号楼</h3>
                <hr></hr>
                <p>
                    一楼：内分泌科 血液科<br></br>
                    二楼：心血管科 脾胃病科<br></br>
                    三楼：眼科 口腔了<br></br>
                    四楼：麻醉科 急诊科<br></br>
                </p>
                </div>
                <div id="syn" class="container tab-pane fade"><br/>
                <h3>综合楼</h3>
                <hr></hr>
                <p>
                    一楼：入院服务中心<br></br>
                    二楼：骨髓室  多学科协作诊治中心  国际远程医学中心  静脉置管室
                </p>
                </div>
                <div id="ser" class="container tab-pane fade"><br/>
                <h3>服务楼</h3>
                <hr></hr>
                <p>
                    一楼：职业病科  同位素室  家园小吃<br></br>
                    二楼：护理服务中心  益达公司<br></br>
                    三楼：总务科  药剂科  质量管理科  对外联络办公室<br></br>
                </p>
                </div>
            </div>
        </div>
    )
}