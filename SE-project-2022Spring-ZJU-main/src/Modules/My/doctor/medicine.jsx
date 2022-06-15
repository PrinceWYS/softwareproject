import React from 'react';
import { useState, useEffect } from 'react';
import Axios from 'axios';
import {Formik,  Form, Field } from 'formik';
import "../my.css"

export default function ShowMedicine ({MR_ID})  {
    // 进入页面后自动刷新一次
    if (location.href.indexOf("#reloaded")==-1) {
        location.href = location.href + "#reloaded";
        location.reload();
    }
    const [src, setSrc] = useState([]);
    useEffect(() => {
        const path = "http://localhost:3000/all-medicine/";
        // let cancelled = false;
        LoadMedicine(path, setSrc);
        
    }, []);

    const initialValues = {
        drug_id: '',
        MR_ID: MR_ID,
    }

    function onSubmit (values) {
        console.log(values);
        Axios.post("http://localhost:3000/doctor/medicine/", {
            drug_id: values.drug_id,
            MR_ID: values.MR_ID,
            }).then((response) => {
                console.log(response);
                alert("添加成功");
            }).catch((error) => {
                console.log(error);
            }
        );
    }

    return (
        <div>
        <Formik onSubmit={onSubmit} initialValues={initialValues}>
            <div className='tab'>
            <Form>
            <Field as='select' name='drug_id'
            class="selectpicker" 
            multiple 
            data-live-search="true" 
            data-style="btn-info"
            data-live-search-placeholder="搜索" 
            data-actions-box="true"
            data-none-selected-text="请选择药品"
            >
                {/* <option value=''>请选择药品</option> */}
                {src.map((med, index) => {
                return (
                    <option key={index} value={med.drug_id}>{med.drug_name}</option>
                    )
                })}
            </Field>
            <select name='frequency'>

            </select>

            <button type='submit' className='btn btn-success'>
                Submit
            </button>
            </Form>

            </div>
        </Formik>
        </div>
    )
}

function LoadMedicine(path, setSrc){
    Axios.get(path, { 
            // params: {userID : localStorage.getItem('token')}
        }).then((response) => {
            console.log(response.data);
            if(response.data.res){
                // urls = [];
                // for(var x=0; x<response.data.res.length; x++){
                //     var url = response.data.res[x].data_url;
                //     url = "http://localhost:3000/uploads/" + url;
            
                //     urls.push(url);
                // }
                // console.log(urls);
                setSrc(response.data.res);
            }
        }).catch((err) => {
            console.error(err);
        });
}

export {LoadMedicine};
