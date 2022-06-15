# SE-project-2022spring-ZJU

A course project for Software Engineering @ZJU: a medical service management platform

# 能够跑起来之后的初步任务

- 王越嵩：熟悉Bootstrap的使用，设计医生/病人的个人主页。对照 https://getbootstrap.com/docs/5.1/getting-started/introduction/ (EN) 或者 https://v4.bootcss.com/docs/getting-started/introduction/ （中） 在“Home”界面 (src/Modules/MainPage)下进行。
- 陈浩龙：确认用户登录注册需要的表格（年龄、性别等）项，并修改对应的代码。对照 https://formik.org/docs/overview (EN) https://www.jianshu.com/p/9c8d46449e1a （中）在登陆界面 (src/loginInterface/Login) 的 `return` 语句中修改
- 侯雨雪：确认前端的具体内容，在(src/backend/index.js)修改后端代码。设计形式统一的提示、报错信息模板。
- 王可莹：设计数据库连接时的参数(user, host, password, database)使团队统一；设计医生、病人的table，准备几条医生的信息，并与侯雨雪的后端对接。
- 潘奕康：设计医生/病人的不同权限，显示不同信息。

# How to run

`npm install` to install necessary dependencies.

`npm run dev` for frontend.

Before running your backend, create a connection on your mysql server first:

Then, in folder src/backend -> **index.js and image.js** modify the fields below for your database specifics:

```js
const db = mysql.createConnection({
  user: "...",
  host: "...", 
  password: "...", //depends on your implementation
  database: "..."
});

```

`node ./src/backend/index.js` for backend.

# 更详细的信息

可以看下report文件夹里的报告，用户使用手册比较全面（仅限于使用方面）

# 基本目标

1、 注册、登录界面（登录之后可以显示身份信息，医生信息已在数据库中建好）
    ‒ 身份证号，姓名，性别，年龄，婚姻情况
2、 访问界面（医护 病人 游客）
3、医生界面（编辑病人病历（病人病情 医生建议 药单）查看个人日程（课表 患者姓名 时间）查看个人信息（姓名 工号 年龄 所属科室 职务））
4、病人界面（预约挂号（选择科室医生、时间） 查看个人病历  编辑个人信息））
5、基本界面（医院简介、科室信息、健康资料库、医院动态、就医指南 （游客状态点击预约跳转登录））

扩展内容:
1、管理员（加入医生、修改医生信息、修改科室诊室信息）
2、医生（发布查看科室公告、在线诊疗）
3、病人（在线诊疗）
4、论坛交流

分工：
1、搭建数据库并测试（保留创建语句并绘制ER图） 1（wky）
2、后端 1 （侯雨雪）
3、前端 3（陈 王UI 潘逻辑）

# 一些tips

下载安装Github Desktop和 VS Code
- 连接比较稳定
- 界面更人性化

成功运行的标志：
前端：在 localhost:1234 上能够渲染上方导引栏
后端：终端显示server running

完成自己的阶段性工作之后记得 commit （本地记录） 和 push （到github），说明越长越好




