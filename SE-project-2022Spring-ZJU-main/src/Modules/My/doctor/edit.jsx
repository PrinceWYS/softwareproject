import React from "react";
import "../my.css"
// import { Formik, Field, Form } from 'formik';
import Axios from 'axios'

function save() {
    alert("编辑成功！");
}


export default class Edit extends React.Component {

    constructor(props) {
        super(props);
        this.state = {description: '', advice: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event, name) {
        // console.log(event.target.value);
        if (name === 'description') {
            this.setState({description: event.target.value});
        }
        else if (name === 'advice') {
            this.setState({advice: event.target.value});
        }
    }

    handleSubmit(event) {
        // alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
        Axios.post('http://localhost:3000/doctor/edit', {
            description: this.state.description,
            // prescription: this.state.prescription,
            advice: this.state.advice,
            MR_ID: this.props.match.params.id,
            // doctor_ID: localStorage.getItem('token')
        }).then(async (Response) => {
            console.log(Response);
            if (Response.data.message) { //Error
                alert('Message: ' + Response.data.message);
            }
            else { //Success
                save();
            }
        })
        
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <div width="100%">
                <div width="100%">
                    <br></br><br></br>
                    <h3 align="center">{this.props.match.params.id}的病历</h3>
                    <hr width="90%"></hr>
                    <div className="tab">
                        <table className="table-bordered tabin">
                            <tr className="tababv">
                                <td width="25%">姓名</td><td width="25%%">{this.props.match.params.id}</td>
                                <td width="25%">民族</td><td width="25%">汉族</td>
                            </tr>
                            <tr className="tababv">
                                <td width="25%">就诊日期</td><td width="25%">2022-5-1</td>
                                <td width="25%">就诊科室</td><td width="25%">精神科</td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <textarea className="adv" placeholder="病情描述" name="description" value={this.state.description} onChange={(event) => this.handleChange(event, 'description')}></textarea>
                                    {/* value={this.state.description} onChange={this.handleChange}></textarea> */}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <textarea className="adv" placeholder="医嘱" name="advice" value={this.state.advice} onChange={(event) => this.handleChange(event, 'advice')}></textarea>
                                    {/* value={this.state.advice} onChange={this.handleChange}></textarea> */}
                                </td>
                            </tr>
                            <tr>
                                <td colSpan="4">
                                    <textarea className="adv" placeholder="其他" // 暂时没用
                                    value={this.state.others} onChange={this.handleChange}></textarea>
                                </td>
                            </tr>
                        </table>
                        <button type="submit" className="btn btn-info but" onClick={this.handleSubmits}>保存</button>
                        
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
            </form>
        )
    }
};