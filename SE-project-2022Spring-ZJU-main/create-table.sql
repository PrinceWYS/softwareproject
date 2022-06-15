drop database se_project;
-- ----------新建数据库se_project--------------------
CREATE database IF NOT EXISTS se_project DEFAULT CHARACTER SET utf8;

-- 病人基本信息表 
CREATE TABLE IF NOT EXISTS se_project.patient (
	patient_id int(10) auto_increment not null primary key comment '患者id',
	patient_name varchar(20) not null comment '真实姓名',
    patient_gender enum('F','M') not null comment '患者性别',
	patient_age int not null comment '患者年龄',
	patient_IDcard char(18) unique not null comment '身份证号',
    patient_marriage enum('single','married') comment '婚姻情况',
    patient_phoneNum char(11) comment '联系电话',
    password varchar(20) not null comment '登录密码',
    check (length(patient_phoneNum)=11),
    check (length(patient_IDcard)=18),
    check (patient_age >= 0)
)auto_increment=3180000000;

-- 科室表
CREATE TABLE IF NOT EXISTS se_project.department(
	dept_id int(4) primary key comment '科室编号',
	dept_name varchar(20) not null comment '科室名称'
);


-- 医生基本信息表
CREATE TABLE IF NOT EXISTS se_project.docter (
	Wno int(7) not null primary key comment '医生工号',
	docter_name varchar(20) not null comment '医生姓名',
    doctor_gender enum('F','M') not null comment '医生性别',
	doctor_age int not null comment '年龄',
    dept_id int(4) not null comment '所属科室编号',
    doctor_title varchar(20) not null comment '职称',
    doctor_phoneNum char(11) comment '联系电话',
    password varchar(20) not null comment '登录密码',
    foreign key (dept_id) references department(dept_id),
    check (length(doctor_phoneNum)=11)
);


-- 诊室表（一个医生负责一个诊室）
CREATE TABLE IF NOT EXISTS se_project.diagnosedRoom(
	Room_id int not null primary key comment '诊室编号',
	Wno int unique not null comment '医生工号',
    foreign key (Wno) references docter(Wno)
);

-- #诊室患者对应表
-- CREATE TABLE IF NOT EXISTS se_project.patientInRoom(
-- 	patient_id int not null primary key comment '患者id',
-- 	Room_id int not null comment '诊室编号',
--     foreign key (patient_id) references patient(patient_id)
-- );

-- 预约日程表(每个医生每天最多可预约40个病人)
CREATE TABLE IF NOT EXISTS se_project.calendar (
	cal_id int auto_increment primary key comment '预约id',
    cal_day date not null comment '预约日期',
	cal_num int not null comment '预约号码',
    Wno int not null comment '预约医生工号',
    patient_id int(10) not null comment '预约患者id',
    unique(cal_day, cal_num, Wno),
    foreign key (Wno) references docter(Wno),
    foreign key (patient_id) references patient(patient_id)
);


-- 公告信息表
CREATE TABLE IF NOT EXISTS se_project.announcement(
	announce_id int auto_increment primary key comment '公告编号',
	dept_id int(4) not null comment '所属科室编号',
	Wno int not null comment '医生工号',
    announce_info varchar(50) not null comment '公告内容',
    announce_date date not null comment '发布日期',
    foreign key (dept_id) references department(dept_id),
    foreign key (Wno) references docter(Wno)
);


-- 病历信息表
CREATE TABLE IF NOT EXISTS se_project.medicalRecord (
	MR_id int auto_increment primary key comment '病历编号',
    patient_id int(10) not null comment '患者id',
	Wno int not null comment '医生工号',
    illDescription varchar(100) not null comment '病情描述',
    medical_advice varchar(100) comment '医嘱',
    totalCost decimal(10,2) comment '总计费用',
    foreign key (patient_id) references patient(patient_id),
    foreign key (Wno) references docter(Wno)
);

-- 药品信息表
CREATE TABLE IF NOT EXISTS se_project.drugsInfo(
	drug_id int(4) primary key comment '药品编号',
	drug_name varchar(10) unique not null comment '药品名称',
    category enum('Rx','OTC') not null comment '药品类别',
    funtion varchar(50) not null comment '功能主治',
	approvalNum varchar(15) comment '批准文号',
	univalence decimal(10,2) comment '单价'
);

-- 药单
CREATE TABLE IF NOT EXISTS se_project.prescription(
	MR_id int not null comment '病历编号',
	drug_id int(4) not null comment '药品编号',
	amount int not null comment '数量',
    note varchar(50) comment '备注',
	subtotal decimal(10,2) not null comment '小计',
    primary key (MR_id, drug_id),
    foreign key (MR_id) references medicalRecord(MR_id),
    foreign key (drug_id) references drugsInfo(drug_id)
);


