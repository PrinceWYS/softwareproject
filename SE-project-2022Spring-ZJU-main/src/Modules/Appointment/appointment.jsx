import React from 'react'
import { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import Axios from 'axios'
import DatePicker from 'react-datepicker';
import Yup from 'yup';
import "react-datepicker/dist/react-datepicker.css";
import "./appointment.css"

function Appointment() {

    const initialValues = {
        patient_ID: localStorage.getItem('token'),
        doctor_ID: '',
        department_ID: '',
        time: '',
        date: '',
    }   

    const [startDate, setStartDate] = useState(new Date());

    // const ValidationSchema = Yup.object().shape({
    //     doctor_ID: Yup.string()
    //         .required('医生ID不能为空'),
    //     department_ID: Yup.string()
    //         .required('科室ID不能为空'),
    //     time: Yup.string()
    //         .required('时间不能为空'),
    //     date: Yup.string()
    //         .required('日期不能为空'),
    // });

    
    function handleSubmit({patient_ID, doctor_ID, department_ID, time}, { setSubmitting }) {
        // doctor_ID.preventDefault();
        // department_ID.preventDefault();
        // time.preventDefault();
        Axios.post('http://localhost:3000/appointment/',
        {patient_ID: patient_ID, 
        doctor_ID: doctor_ID,
        department_ID: department_ID,
        time: time,
        date: startDate}).then(async (Response) => {
            console.log(Response);
            if (Response.data.message) { //Error
                alert('Message: ' + Response.data.message);
                setSubmitting(false);
            }
            else { //Success
                // alert('Message: 预约成功！');
            }
        })
        console.log('提交表单');
    }

    return (
		<div width="100%">
            <Formik initialValues={initialValues} 
            // validationSchema={ValidationSchema} 
            onSubmit={handleSubmit}>
                <Form>
                    <div width="100%">
                        <div width="100%">
                            <div className='bo'>
                            <h1 className="text-center">进行预约</h1>
                            <br></br><br></br>
                            <div className="container" align="center">
                                <Field name='department_ID' as='select' className="btn btn-info btn-block btn-lg">
                                    <option value=''>所有科室</option>
                                    <option value='1'>内科</option>
                                    <option value='2'>妇产科</option>
                                    <option value='3'>骨科</option>
                                </Field>
                                <br></br> 
                                <Field name='doctor_ID' as='select' className="btn btn-info btn-block btn-lg">
                                    <option value=''>所有医生</option>
                                    <option value='1000001'>李锦</option>
                                    <option value='1000002'>许怡英</option>
                                    <option value='1000003'>冷贝珠</option>
                                </Field>
                                <br></br>
                                <Field name='time' as='select' className="btn btn-info btn-block btn-lg">
                                    <option> 所有时间段</option>
                                    <option value='800945'>8:00-9:45</option>
                                    <option value='10151200'>10:15-12:00</option>
                                    <option value='14001515'>14:00-15:15</option>
                                    <option value='15451700'>15:45-17:00</option>
                                </Field>
                                <br></br>
                                {/* <Field name='date'> */}
                                <DatePicker selected={startDate} onChange={(date) => setStartDate(date)}/>
                                {/* </Field> */}
                                <script src="./select.js"></script>
                            </div>
                            <br></br>
                            <div className='media'>
                                <div className='media-body'>
                                {/**帮助 */}
                                <button class="btn btn-success" data-toggle="modal" data-target="#myModal">
                                    预约流程
                                </button>
                                <div class="modal fade" id="myModal">
                                    <div class="modal-dialog modal-lg">
                                        <div class="modal-content mod">
                                            <div class="modal-header">
                                                <h4 class="modal-title">预约流程</h4>
                                                <button type="button" class="close" data-dismiss="modal">&times;</button>
                                            </div>
                                            <div class="modal-body">
                                                <img src={require('../../pic/appointment.png')}></img>
                                            </div>
                                            <div class="modal-footer">
                                                <button type="button" class="btn btn-secondary" data-dismiss="modal">关闭</button>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                </div>
                                <div className="media-body">
                                    {/* <button type="submit">submit</button> */}
                                    <button type='submit' className="btn btn-success" data-toggle="modal" data-target="#myModal1">
                                        立即预约
                                    </button>
                                    <div className="modal fade" id="myModal1">
                                        <div className="modal-dialog">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h4 className="modal-title">预约成功!</h4>
                                                    <button type="button" className="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div className="modal-body">
                                                    时间+科室+医生名字
                                                </div>
                                                <div className="modal-footer">
                                                    <button type="button" className="btn btn-secondary" data-dismiss="modal">确认</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div> 
                                
                                </div>
                                <div className='media-body'>
                                    {/**联系导诊 */}
                                    <button class="btn btn-success" data-toggle="modal" data-target="#myModal2">
                                        联系导诊
                                    </button>
                                    <div class="modal fade" id="myModal2">
                                        <div class="modal-dialog">
                                            <div class="modal-content">
                                                <div class="modal-header">
                                                    <h4 class="modal-title">导诊联系方式</h4>
                                                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                                                </div>
                                                <div class="modal-body">
                                                    tel: +86-571-87953052<br/>
                                                    email: 3190000001@zju.edu.cn
                                                </div>
                                                <div class="modal-footer">
                                                    <button type="button" class="btn btn-secondary" data-dismiss="modal">确认</button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                </Form>
            </ Formik>
        </div> 
    )
}
export default Appointment;