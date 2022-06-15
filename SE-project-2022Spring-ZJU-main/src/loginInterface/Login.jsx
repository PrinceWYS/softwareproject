import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Axios from 'axios';
// import {useState} from 'react';
// import { accountManager, AccountManager } from './helper/user.service.js'
// import storage from './helper/LoginStatus';
// import Register from "./Register";
// import { accountService, alertService } from '@/_services';


async function loginUser(credentials) {
    return fetch('http://localhost:3000/login/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

function Login({ setToken, setRole } /*{ history, location }*/) {

    const initialValues = {
        role: '',
        IDcard: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        role: Yup.string()
            .required('角色不能为空')
            .oneOf(['admin', 'patient', 'docter'], 'Invalid user'),
        IDcard: Yup.string()
            .matches(/^[0123456789]{18}$|^[0123456789]{17}X$/,
            "身份证号码不合法")
            .required("身份证号码不能为空"),
        password: Yup.string()
            .required('密码不能为空')
            .min(6, '密码不能少于6位')
    });

    function onSubmit({ role, IDcard, password }, { setSubmitting }) {
        // alert("in onSubmit");
        Axios.post('http://localhost:3000/login/',
            { role: role, IDcard: IDcard, password: password }).then(async (Response) => {
                console.log(Response);
                if (Response.data.message) {
                    alert('Message: ' + Response.data.message);
                    setSubmitting(false);
                }
                else {
                    alert('Message: ' + Response.data.patient_name + ' 登录成功！');
                    const token = await loginUser({
                        role, IDcard, password
                    });
                    setToken(token);
                    setRole("patient");
                    localStorage.setItem("token", JSON.stringify(Response.data.token));

                    //TODO: backend should send back the role of current user
                    localStorage.setItem("role", "patient");
                }
                // this.props.history.push('/home');
            })
        // alertService.clear();
        // accountService.login(email, password)
        //     .then(() => {
        //         const { from } = location.state || { from: { pathname: "/" } };
        //         history.push(from);
        //     })
        //     .catch(error => {
        //         setSubmitting(false);
        //         alertService.error(error);
        //     });
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h3 className="card-header">登录</h3>
                    <div className="card-body">
                        <div className='form-group'>
                            <label>用户角色</label>
                            <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')} >
                                <option value="">请选择</option>
                                {/* <option value="admin">管理员</option>
                                <option value='docter'>医生</option> */}
                                <option value='patient'>用户</option>
                                <option value='tourist'>游客</option>
                            </Field> 
                            <ErrorMessage name="role" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>身份证号</label>
                            <Field name="IDcard" type="text" className={'form-control' + (errors.IDcard && touched.IDcard ? ' is-invalid' : '')} />
                            <ErrorMessage name="IDcard" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>密码</label>
                            <Field name="password" type="password" className={'form-control' + (errors.password && touched.password ? ' is-invalid' : '')} />
                            <ErrorMessage name="password" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-row">
                            <div className="form-group col">
                                <button type="submit" disabled={isSubmitting} className="btn btn-primary">
                                    {isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                                    用户登录
                                </button>
                                <Link to="/login/stafflogin" className='btn btn-link'>职工登录</Link>
                            </div>

                            <Link to="/login/register" className="btn btn-link">注册</Link>
                            {/* <div className="form-group col text-right">
                                <Link to="forgot-password" className="btn btn-link pr-0">Forgot Password?</Link>
                            </div> */}
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired,
    setRole: PropTypes.func.isRequired
}

export { Login };