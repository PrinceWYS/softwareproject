import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Axios from 'axios';

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

function Register ({setToken}/*{ history, location }*/) {
    const initialValues = {
        name: '',
        gender: '',
        age: '',
        IDcard: '',
        marriage: '',
        phoneNum: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        name: Yup.string()
            .required('Name is required'),
        gender: Yup.string()
            .required('Gender is required')
            .oneOf(['M', 'F']),
        age: Yup.number()
            .required('Age is required'),
        IDcard: Yup.string()
            .matches(/^[0123456789]{18}$|^[0123456789]{17}X$/,
            "ID is invalid")
            .required("ID is required"),
        marriage: Yup.string()
            .required('Marriage status is required')
            .oneOf(['married', 'single']),
        phoneNum: Yup.string()
            .matches(/^[0123456789]{11}$/, 
            "Phone number is invalid")
            .required('Email is required'),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    function onSubmit({ name, gender, age, IDcard, marriage, phoneNum, password }, { setSubmitting }) {

        Axios.post('http://localhost:3000/register/', 
        {
            name: name, 
            gender: gender, 
            age: age,
            IDcard: IDcard,
            marriage: marriage,
            phoneNum: phoneNum, 
            password: password}).then(async (Response) => {
            console.log(Response);
            if(Response.data.err){
                alert('Message: ' + Response.data.err.sqlMessage);
                setSubmitting(false);
            }
            else {
                alert('Message: Registeration successful.');
                // const token = await loginUser("patient", {
                //     IDcard, password
                // });
                // setToken(token);
                // localStorage.setItem("token", JSON.stringify(Response.data.token));
            }
        })
        // alertService.clear();
        // accountService.Register(email, password)
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
                    <h3 className="card-header">注册</h3>
                    <div className="card-body">
                        <div className="form-group">
                            <label>姓名</label>
                            <Field name="name" type="text" className={'form-control' + (errors.name && touched.name ? ' is-invalid' : '')} />
                            <ErrorMessage name="name" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>性别</label>
                            <Field name="gender" as="select" className={'form-control' + (errors.gender && touched.gender ? ' is-invalid' : '')} >
                                <option value="">请选择</option>
                                <option value="M">男</option>
                                <option value="F">女</option>
                            </Field>
                            <ErrorMessage name="gender" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>年龄</label>
                            <Field name="age" type="number" className={'form-control' + (errors.age && touched.age ? ' is-invalid' : '')} />
                            <ErrorMessage name="age" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>身份证号</label>
                            <Field name="IDcard" type="text" className={'form-control' + (errors.IDcard && touched.IDcard ? ' is-invalid' : '')} />
                            <ErrorMessage name="IDcard" component="div" className="invalid-feedback" />
                        </div>
                        <div className='form-group'>
                            <label>婚姻状况</label>
                            <Field name="marriage" as="select" className={'form-control' + (errors.marriage && touched.marriage ? ' is-invalid' : '')}>
                                <option value="">请选择</option>
                                <option value="married">已婚</option>
                                <option value="single">未婚</option>
                            </Field>
                        </div>
                        <div className="form-group">
                            <label>手机号</label>
                            <Field name="phoneNum" type="text" className={'form-control' + (errors.phoneNum && touched.phoneNum ? ' is-invalid' : '')} />
                            <ErrorMessage name="phoneNum" component="div" className="invalid-feedback" />
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
                                    注册
                                </button>
                                <Link to="/login" className="btn btn-link">返回</Link>
                            </div>
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

Register.propTypes = {
    setToken: PropTypes.func.isRequired
}

export {Register};