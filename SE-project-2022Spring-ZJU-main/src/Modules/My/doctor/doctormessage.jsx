import React from 'react';

// import ShowMyImages from '../showMyImages.jsx';
import WebStylec from '../webStylec.jsx';

export default function Doctormessage () {
    
    return (
        <table class="table table-bordered">
        <tr>
            <td colSpan="5" align="center"><strong>个人基本信息</strong></td>
        </tr>
            <tr>
                <td width="15%"><strong>姓名</strong></td>
                <td width="20%" contentEditable="true">
                    王越嵩	
                </td>
                <td width="10%"><strong>性别</strong></td>
                <td width="15%" contentEditable="true">男</td>
                <td rowSpan="2">
                    <div align="center">
                        <WebStylec />
                       {/* <ShowMyImages props={localStorage.getItem('token')} /> */}
                    </div>
                </td>
            </tr>
            <tr>
                <td><strong>联系方式</strong></td>
                <td contentEditable="true">18067954568</td>
                <td><strong>民族</strong></td>
                <td contentEditable="true">汉族</td>
            </tr>
            <tr>
                <td><strong>所属科室</strong></td>
                <td contentEditable="true">外科</td>
                <td><strong>工号</strong></td>
                <td colspan="2">3190105303</td>
            </tr>
            <tr>
                <td><strong>职位或职务</strong></td>
                <td colspan="4" contentEditable="true">**科主任</td>
            </tr>
        </table>
    )
}
