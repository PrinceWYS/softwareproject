import './home.css'
import Picture from './picture.jsx'
import Scroll from './scroll.jsx'


export default function Home () {
    // 进入页面后自动刷新一次
    if (location.href.indexOf("#reloaded")==-1) {
        location.href = location.href + "#reloaded";
        location.reload();
    }
    return (
        <div width="100%">
            <div width="100%">
                {/*标题栏*/}
                <div class="media p-3 title">
                    <br></br>
                    <div class="media-body">
                        <h3 className='text'>互联网健康医疗系统</h3>
                        <br></br>
                        <p className='text'>更健康 更迅速 更专业 更贴心的医疗服务系统</p>      
                    </div>
                    <img src={require('../../pic/logo.png')} style={{width:'20%'}}></img>
                </div>
                {/**滑动图片栏*/}
                <Picture />
                <div>
                    <br></br><br></br>
                </div>
                <hr className='div'></hr>
                {/*中部一 */}
                <div className='media'>
                    {/*滚动公告栏*/}
                    <div className='box media-body'>
                        <h2 align="center">消息盒子</h2>
                        <Scroll />
                    </div>
                    {/*欢迎*/}
                    <div className='media-body'>
                        <h2 align="center">欢迎登录！</h2>
                        <div className='logintext'>
                            <p>用户：{localStorage.getItem('role')} 已成功登录</p>
                            <p>您可以点击这里</p>
                        </div>
                        <div className='buttonLow'>
                        <button onClick={()=>{window.location.href="http://localhost:1234/my"}} className="btn btn-success">
                            个人主页
                        </button><br></br><br></br>
                        <button onClick={()=>{window.location.href="http://localhost:1234/appointment"}} className="btn btn-success">
                            立即预约
                        </button>
                        </div>
                    </div>
                </div>
                <div className='divider'></div>
                <br></br><br></br>
                <hr className='div'></hr>
                {/**中部二 */}
                <div className='media'>
                    {/**常见QA */}
                    <div className='media-body QA'>
                        <h3>常见问题解答</h3><br></br>
                        <ul>
                            <li>
                                <h5>问题一 这家医院的宗旨是什么？</h5>
                                <p>回答：求仕、创薪</p>
                            </li>
                            <li>
                                <h5>问题二 要怎么进行预约？</h5>
                                <p>回答：您可以从首页欢迎登录模块进入，同时可以从右上角个人进入</p>
                            </li>
                            <li>
                                <h5>问题三 忘记登录密码了怎么办？</h5>
                                <p>回答：请发送邮件给管理员，管理员会协助您找回密码</p>
                            </li>
                            <li>
                                <h5>问题四 预约时不知道预约哪个医生怎么办？</h5>
                                <p>回答：我们的医生都是专业的，如果您因为不知道选择哪个科室，可以联系导诊</p>
                            </li>
                            <li>
                                <h5>问题五 在医院迷路了怎么办？</h5>
                                <p>回答：我们的网站以及医院均有详细的导航地图</p>
                            </li>
                            <h6>更多问题请咨询：+86-571-87953025</h6>
                        </ul>
                    </div>
                    {/**关注我们 */}
                    <div className='media-body'>
                        <h4>关注我们</h4>
                        <div className='media'>
                            <figure className='media-body concern'>
                                <img src={require('./pic/qrcode.png')} width="30%"></img>
                                <figcaption>服务号</figcaption>
                            </figure>
                            <figure className='media-body concern'>
                                <img src={require('./pic/qrcode.png')} width="30%"></img>
                                <figcaption>订阅号</figcaption>
                            </figure>
                        </div>
                    </div>
                </div>
                <br></br><br></br>
                <hr className='div'></hr>
                {/**中部三 */}
                <div>
                    <p className='linked'>
                        友情链接
                        <a className='btn btn-link' href='http://www.cdc.zj.cn/' target={"_blank"} rel={"noopener noreferrer"}>浙江省疾病预防控制中心</a>

                        <a className='btn btn-link' href='https://wsjkw.zj.gov.cn/' target={"_blank"} rel={"noopener noreferrer"}>浙江省卫生健康委员会</a>

                        <a className='btn btn-link' href='http://www.nhc.gov.cn/' target={"_blank"} rel={"noopener noreferrer"}>中华人民共和国国家健康卫生委员会</a>

                        <a className='btn btn-link' href='http://www.chinacdc.cn/' target={"_blank"} rel={"noopener noreferrer"}>中国疾病预防控制中心</a>
                    </p>
                    
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
                            <img src={require('./pic/qrcode.png')} style={{width:'30%'}}></img>
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