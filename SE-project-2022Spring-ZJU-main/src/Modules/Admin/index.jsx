import React from 'react';
import { Link } from 'react-router-dom';

export default function Admin(){
    return (
        <div className="p-4">
            <div className="container">
                <div className="jumbotron">
                    <h1 className="text-center">请选择操作</h1>
                    <br></br>
                    <Link to="/admin/add">
                        <button className="btn btn-primary btn-lg btn-block">添加医生</button>
                    </Link>
                    <br></br>
                    <Link to="/admin/edit">
                        <button className="btn btn-primary btn-lg btn-block">编辑医生</button>
                    </Link>
                    <br></br>
                    <Link to="/admin/delete">
                        <button className="btn btn-primary btn-lg btn-block">删除医生</button>
                    </Link>
                    </div>
            </div>
        </div>
    );

}