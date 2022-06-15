import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Field, Form, ErrorMessage } from 'formik';
// import PropTypes from 'prop-types';
import * as Yup from 'yup';
import Axios from 'axios';

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

function StaffLogin({ setToken, setRole }/*{ history, location }*/) {

    const initialValues = {
        role: '',
        ID: '',
        password: ''
    };

    const validationSchema = Yup.object().shape({
        role: Yup.string()
            .required('role is required')
            .oneOf(['admin', 'docter'], 'Invalid user'),
        ID: Yup.string()
            .matches(/^[0123456789]{7}$/,
            "ID is invalid")
            .required("ID is required"),
        password: Yup.string()
            .required('Password is required')
            .min(6, 'Password must be at least 6 characters')
    });

    function onSubmit({ role, ID, password }, { setSubmitting }) {
        // alert("in onSubmit");
        if (role === 'admin') {
            setToken('admin');
            localStorage.setItem('role', 'admin');
            localStorage.setItem('token', 'admin');
        }
        Axios.post('http://localhost:3000/login/',
            { role: role, ID: ID, password: password }).then(async (Response) => {
                console.log(Response);
                if (Response.data.message) {
                    alert('Message: ' + Response.data.message);
                    setSubmitting(false);
                }
                else {
                    alert('Message: ' + Response.data.docter_name + ' 登陆成功！');
                    const token = await loginUser({
                        role, ID, password
                    });
                    setToken(token);
                    setRole("doctor");
                    localStorage.setItem("token", JSON.stringify(Response.data.token));

                    //TODO: backend should send back the role of current user
                    localStorage.setItem("role", "doctor");
                }
            })
    }

    return (
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
            {({ errors, touched, isSubmitting }) => (
                <Form>
                    <h3 className="card-header">员工登录</h3>
                    <div className="card-body">
                        <div className='form-group'>
                            <label>用户角色</label>
                            <Field name="role" as="select" className={'form-control' + (errors.role && touched.role ? ' is-invalid' : '')} >
                                <option value="">请选择</option>
                                <option value="admin">管理员</option>
                                <option value='docter'>医生</option>
                                {/* <option value='patient'>用户</option>
                                <option value='tourist'>游客</option> */}
                            </Field> 
                            <ErrorMessage name="role" component="div" className="invalid-feedback" />
                        </div>
                        <div className="form-group">
                            <label>ID/工号</label>
                            <Field name="ID" type="text" className={'form-control' + (errors.ID && touched.ID ? ' is-invalid' : '')} />
                            <ErrorMessage name="ID" component="div" className="invalid-feedback" />
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
                                    登录
                                </button>
                                <Link to="/login" className='btn btn-link'>返回用户登录</Link>
                            </div>

                            {/* <Link to="/login/register" className="btn btn-link">注册</Link> */}
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

// Login.propTypes = {
//     setToken: PropTypes.func.isRequired
// }

export { StaffLogin };