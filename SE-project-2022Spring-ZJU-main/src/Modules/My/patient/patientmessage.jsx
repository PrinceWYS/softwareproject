import React from 'react';
import ShowMyImages from '../showMyImages.jsx';
import WebStylec from '../webStylec.jsx';

export default function patientmessage() {
    return (
        <table class="table table-bordered">
        <tr>
            <td colSpan="5" align="center"> <strong>个人基本信息</strong></td>
        </tr>
        <tr>
            <td width="10%"><strong>姓名</strong></td>
            <td width="25%" contentEditable="true">
                王越嵩	
            </td>
            <td width="10%"><strong>性别</strong></td>
            <td width="15%">男</td>
            <td rowSpan="2">
                <div align="center">
                    <WebStylec />
                </div>
            </td>
        </tr>
        <tr>
            <td><strong>联系方式</strong></td>
            <td contentEditable="true">18067954568</td>
            <td><strong>民族</strong></td>
            <td contentEditable="true">汉族</td>
        </tr>
    </table>
    )
}