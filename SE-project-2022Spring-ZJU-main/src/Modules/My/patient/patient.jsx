import React from 'react';

import ReactUploadImage from '../imageUpload.jsx';
import Patientmessage from './patientmessage.jsx';

function MainPage() {
    return (
		<div width="100%">
        	<div width="100%">
        		<div className="tab">
					<br></br><br></br>
            		<h1 className="text-center">我的主页</h1>
            		<p className="text-center">身份信息：患者</p>
					
                	{/* <div className="card-body" align="center">
                  		<ReactUploadImage />
                	</div>	 */}
					<Patientmessage/>
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

export default MainPage;
