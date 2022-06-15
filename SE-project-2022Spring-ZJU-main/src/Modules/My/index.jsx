import React from 'react';

import ReactUploadImage from './imageUpload.jsx';
import Patientmessage from './patient/patientmessage.jsx';
import Myappointment from './patient/myappointment.jsx';
import Myhistory from './patient/myhistory.jsx';

function MainPage() {
    return (
		<div className="p-4">
        	<div className="container">
        		<div className="jumbotron">
            		<h1 className="text-center">我的主页</h1>
            		<p className="text-center">身份信息：患者</p>
					
                	<div className="card-body" align="center">
                  		<ReactUploadImage />
                	</div>	
					<Patientmessage />
					<Myappointment />
					<Myhistory />
				</div>
      		</div>
		</div>
    )
}

export default MainPage;
