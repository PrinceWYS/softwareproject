// import React from "react";
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();

// # -------------------------- DO NOT MODIFY --------------------------------------------
app.use((_, res, next) => {
  res.header("Cross-Origin-Opener-Policy", "same-origin");
  res.header("Cross-Origin-Embedder-Policy", "require-corp");
  next();
});
app.use(express.json());
app.use(cors());
// # -------------------------------------------------------------------------------------
// app.use("/", images);

const db = mysql.createConnection({
  //TODO:
  user: "root",
  host: "127.0.0.1",
  password: "", //depend on your implement
  database: "se_project"
});

// use .post if you have values from the frontend to pass into the SQL statement.
app.post("/register", (req, res) => {
  // console.log("register");
  //TODO:
  const name = req.body.name;
  const gender = req.body.gender;
  const age = req.body.age;
  const IDcard = req.body.IDcard;
  const marriage = req.body.marriage;
  const phoneNum = req.body.phoneNum;
  const password = req.body.password;

  db.query(
    "INSERT INTO patient (patient_name, patient_gender, patient_age,patient_IDcard, patient_marriage, patient_phoneNum, password) VALUES (?, ?, ?, ?, ?, ?, ?)",
    //TODO:
    [name, gender, age, IDcard, marriage, phoneNum, password],
    (err, result) => {
      if (err) {
        res.send({ err: err });
        return;
      } else {
        res.send({ message: "successful" });
      }
    }
  );
  //注册成功后不直接登录，err为零即注册成功
});

app.post("/login", (req, res) => {
  //console.log("login");
  //TODO:
  const role = req.body.role;
  const IDcard = req.body.IDcard;
  const password = req.body.password;
  const id = req.body.ID;

  if (role == "patient") {
    db.query(
      "SELECT * FROM patient WHERE patient_IDcard = ? AND password = ?",
      [IDcard, password],
      (err, result) => {
        console.log(err);
        if (err) {
          res.send({ err: err });
        } else {
          if (result.length > 0) {
            res.send({
              token: result[0].patient_id,
              patient_name: result[0].patient_name
            });
          } else {
            res.send({ message: "用户名或密码错误" });
          }
        }
      }
    );
  }

  if (role == "docter") {
    db.query(
      "SELECT * FROM docter WHERE Wno = ? AND password = ?",
      [id, password],
      (err, result) => {
        if (err) {
          res.send({ err: err });
        } else {
          if (result.length > 0) {
            res.send({
              token: result[0].Wno,
              docter_name: result[0].docter_name
            });
          } else {
            res.send({ message: "用户名或密码错误" });
          }
        }
      }
    );
  }
});

//病人信息获取
app.get("/patientget", (req, res) => {
  // console.log(req);
  const patient_id = req.query.patient_id;
  console.log(patient_id);
  db.query("SELECT * FROM patient WHERE patient_id = ?)", 
  //把密码也传回去了，不要显示
  [patient_id], (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
});

//医生信息获取
app.get("/docterget", (req, res) => {
  // console.log(req);
  const Wno = req.query.Wno;
  console.log(Wno);
  db.query("SELECT * FROM docter WHERE Wno = ?)", 
  //把密码也传回去了，不要显示
  [Wno], (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
});

//密码更新
app.get("/updatepassword", (req, res) => {
  // console.log(req);
  const role = req.body.role;
  const password = req.body.password;
  if(role == "patient"){
    const patient_id = req.query.patient_id;
  ///console.log(patient_id);
  db.query("UPDATE patient SET password = ? WHERE patient_id = ?",
  [password, patient_id],
  (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
  }else if(role == "docter"){
  const Wno = req.query.Wno;
  console.log(Wno);
  db.query("UPDATE patient SET password = ? WHERE Wno = ?",
  [password, Wno],(err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
  }
});

//信息更新（更新了一些觉得可能会更新的
app.post("/updateInfo", (req, res) => {
  // console.log(req);
  const role = req.body.role;
  if(role == "patient"){
    const patient_id = req.body.patient_id;
    const marriage = req.body.marriage;
    const phoneNum = req.body.phoneNum;
  ///console.log(patient_id);
  db.query("UPDATE patient SET patient_marriage = ?, patient_phoneNum = ? WHERE patient_id = ?",
  [marriage, phoneNum, patient_id],
  (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
  }else if(role == "docter"){
  const Wno = req.body.Wno;
  const phoneNum = req.body.phoneNum;
  console.log(Wno);
  db.query("UPDATE patient SET docter_phoneNum = ? WHERE Wno = ?",
  [phoneNum, Wno],(err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
  }
});


//信息更新（管理员信息更新
app.post("/UpdateInfo", (req, res) => {
  // console.log(req);
  const identity = req.body.role;
  if(identity == "patient"){
    const patient_id = req.body.patient_id;
    const patient_name = req.body.patient_name;
    const patient_gender = req.body.patient_gender;
    const patient_age = req.body.patient_age;
    const patient_IDcard = req.body.patient_IDcard;
    const marriage = req.body.marriage;
    const phoneNum = req.body.phoneNum;
    const password = req.body.password;
  ///console.log(patient_id);
  db.query("UPDATE patient SET patient_name = ?,patient_gender = ?,patient_age = ?,patient_IDcard = ?,patient_marriage = ?,patient_phoneNum = ?,patient_password = ? WHERE patient_id = ?"
  [patient_name, patient_gender, patient_age, patient_IDcard, marriage, phoneNum, password, patient_id],
  (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
  }else if(identity == "docter"){
  const Wno = req.body.Wno;
  const docter_name = req.body.docter_name;
  const docter_age = req.body.Wno;
  const dept_id = req.body.dept_id;
  const docter_title = req.body.docter_title;
  const password = req.body.password;
  console.log(Wno);
  db.query("UPDATE docter SET docter_name = ?, docter_age = ?, dept_id = ?, docter_title = ?, password = ?, docter_phoneNum = ? WHERE Wno = ?",
  [phoneNum, Wno],(err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("信息错误");
        res.send({ message: "信息错误" });
      }
    }
  });
  }
});



//TODO:获取科室所有医生
app.get("/dept_docter", (req, res) => {
  // console.log(req);
  let dept = req.query.dept;
  db.query("SELECT * FROM docter WHERE dept_id = ?", 
  [dept], (err, result) => {
    console.log(err);
    console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("No pics");
        res.send({ message: "未找到医生信息" });
      }
    }
  });
});


  //TODO:  预约（患者）;
  app.post("/appointment", (req, res) => {
    console.log("a1");
    const patient_ID = req.body.patient_ID;
    const docter_ID = req.body.doctor_ID;
    const day = req.body.date.slice(0,10);
    
    const department_ID = req.body.department_ID;
    const time = req.body.time;
    const illDescription = "";
    const medical_advice = "";
    const totalCost = 0;

    db.query(
      "INSERT INTO calendar (cal_day, cal_num, Wno, patient_id) VALUES (?, ?, ?, ?)",
      [day, time, docter_ID, patient_ID],
      (err, result) => {
      if (err) {
        const myerr = Handleerr(err);
        if(myerr == 1){
          res.send({ message: "该时间段已被预约" });
        }else{
          res.send({ err: err });
        }
      } else {
          db.query(
            "INSERT INTO medicalRecord (patient_id, Wno, illDescription, medical_advice, totalCost) VALUES (?, ?, ?, ?, ?)",
              [patient_ID, docter_ID, illDescription, medical_advice, totalCost],
            (err, result2) => {
              if (err) {
                const myerr = Handleerr(err);
                if(myerr == 1){
                  res.send({ message: "复诊预约成功！" });
                }else {
                  res.send({ err: err });
                }
              } else {
                console.log(3);
                const MR_id = result.MR_id;
                res.send({ message: "预约成功！" });
              }
            }
            );
      }
    }
    );
  });



  //TODO:  获取预约（医生）;
  app.get("/doctor/calindar", (req, res) => {
    const Wno = req.query.doctor_ID;
    db.query(
      "SELECT cal_id, cal_day, cal_num, patient_name FROM calendar INNER JOIN patient ON (calendar.Wno = ? and calendar.patient_id = patient.patient_id )",
      [Wno],
      (err, result) => {
      if (err) {
        res.send({ err: err });
        }else{
          if (result.length > 0) {
            console.log(result);
            res.send({ res: result });
          } else {
            console.log("No pics");
            res.send({ message: "暂无预约" });
          }
        }
      });
  });



    //TODO:  获取预约（患者）;
    app.post("/patient/myappointment", (req, res) => {

      const patient_ID = req.query.patient_ID;
      db.query(
        "SELECT * FROM calendar INNER JOIN docter ON (calendar.patient_id = ? and calendar.Wno = docter.Wno)",
        [patient_ID],
        (err, result) => {
        if (err) {
            res.send({ err: err });
          }else{
            if (result.length > 0) {
              console.log(result);
              res.send({ res: result });
            } else {
              console.log("No pics");
              res.send({ message: "暂无预约" });
            }
          }
        });
    });

  //获取所有药品
  app.get("/all-medicine", (req, res) => {
    //console.log("getall");
    db.query("SELECT * FROM drugsInfo", (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          res.send({ res: result });
        } else {
          console.log("未找到药品");
          res.send({ message: "未找到药品" });
        }
      }
    });
  });


//病历信息获取
  app.get("/medicalrecords", (req, res) => {
    if(req.query.doctor_ID){
    const id = req.query.doctor_ID;
    console.log(1);
    console.log(id);
    db.query("SELECT patient.patient_id, patient.patient_name, patient.patient_gender, patient.patient_age,MR_id, illDescription, medical_advice, totalCost FROM medicalrecord INNER JOIN patient ON (medicalrecord.Wno = ? and patient.patient_id = medicalrecord.patient_id)", 
    //FROM medicalrecord INNER JOIN patient
    //ON (medicalrecord.Wno = ? and patient.patient_id = medicalrecord.paeint.id WHERE Wno = ?) 
    //没有传回医生的id应该没关系吧
    [id], (err, result) => {
      console.log(err);
      // console.log(result);
      if (err) {
        console.log(err);
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          console.log(result);
          res.send({ res: result });
        } else {
          console.log("No patients");
          res.send({ message: "No patients found." });
        }
      }
    });
    }else {
      // console.log(req);
    const id = req.query.patient_ID;
    console.log(2);
    console.log(id);
    db.query("SELECT medicalrecord.Wno, docter_name, dept_id, MR_id, illDescription, medical_advice, totalCost FROM medicalrecord INNER JOIN docter ON (medicalrecord.patient_id = ? and docter.Wno = medicalrecord.Wno)", 
    //没有传回患者的id
    [id], (err, result) => {
      //console.log(err);
      // console.log(result);
      if (err) {
        console.log(err);
        res.send({ err: err });
      } else {
        if (result.length > 0) {
          //console.log(result);
          res.send({ res: result });
        } else {
          console.log("No patients");
          res.send({ message: "没有找到相关病历" });
        }
      }
    });
    }
  });

  //  病历提交
  app.post("/doctor/edit", (req, res) => {
    console.log(req);
    const MR_id = req.body.MR_ID;
    console.log(req.body.description);
    console.log(req.body.advice);
    const illDescription = req.body.description;
    const medical_advice = req.body.advice;
    console.log(MR_id);

    db.query(
      "UPDATE medicalRecord SET illDescription= ? , medical_advice= ?  WHERE MR_id = ? ",
      [illDescription, medical_advice, MR_id],
      //console.log(err);
      //console.log(result);
      (err, result) => {
      if (err) {
        console.log(err);
        res.send({ err: err });
      } else {
        res.send({ message: "保存成功！" });
      }
    });
  });

//发布公告
app.get("/postannouncement", (req, res) => {
  // console.log(req);
  const dept_id = req.body.dept_id;
  const Wno = req.body.Wno;
  const announce_info = req.body.announce_info;
  const announce_date = req.body.announce_date;
  console.log(announce_date);
  
  db.query("INSERT INTO announcement (dept_id, Wno, announce_info, announce_date) VALUES (?, ?, ?, ?)",
  [dept_id, Wno, announce_info, announce_date], 
  (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
        res.send({ res: result });
    }
  });
});

//公告获取
app.get("/announcement", (req, res) => {
  // console.log(req);
  const dept_id = req.body.dept_id;
  console.log(dept_id);
  db.query("SELECT * FROM announcement WHERE dept_id = ?", 
  [dept_id], (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        //console.log("暂无公告");
        res.send({ message: "暂无公告" });
      }
    }
  });
});

//药品获取(通过编号)
app.get("/drugsInfo", (req, res) => {
  // console.log(req);
  const drug_id = req.body.drug_id;
  //console.log(drug_id);
  db.query("SELECT * FROM drugsInfo WHERE drug_id = ?", 
  [drug_id], (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        //console.log("未找到该药品");
        res.send({ message: "未找到该药品" });
      }
    }
  });
});



//药品查找(通过模糊药名)
app.get("/drugsName", (req, res) => {
  // console.log(req);
  const drug_name = req.query.drug_name;
  //console.log(drug_name);
  db.query("SELECT * FROM drugsInfo WHERE drug_name LIKE %?%)", 
  [drug_name], (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0) {
        console.log(result);
        res.send({ res: result });
      } else {
        res.send({ message: "未找到该药品" });
      }
    }
  });
});

//药单信息获取（根据病历id）
app.get("/prescription", (req, res) => {
  // TODO: return with name and gender
  // console.log(req);
  const MR_id = req.body.MR_id;
  console.log(MR_id);
  db.query("SELECT * FROM prescription WHERE MR_id = ?", 
 //获取药单信息
  [MR_id], (err, result) => {
    console.log(err);
    // console.log(result);
    if (err) {
      console.log(err);
      res.send({ err: err });
    } else {
      if (result.length > 0){
        console.log(result);
        res.send({ res: result });
      } else {
        console.log("未找到药单");
        res.send({ message: "未找到相关药单" });
      }
    }
  });
});

  //  药单提交
  app.post("/doctor/medicine", (req, res) => {

    for(let i = 0; i < req.body.drug_id.length; i++){
      const drug_id = Number(req.body.drug_id[i]);
      const MR_id = req.body.MR_id[i];
      const amount = req.body.amount[i];
      const note = req.body.note[i];
      let subtotal = 0;

<<<<<<< HEAD
    db.query(
      "SELECT univalence FROM drugsInfo WHERE drug_id = ?",
      [drug_id],
      (err, result0) => {
      if (err) {
        res.send({ err: err });
      } else {
        if (result0.length > 0){
          subtotal = result0[0].univalence * amount;
          db.query(
            "SELECT amount subtotal FROM prescription WHERE MR_id = ? and drug_id = ?",
            [MR_id, drug_id],
            (err, result1) => {
            if (err) {
              res.send({ err: err });
            } else {
              if(result1.length>0){
                subtotal += result1[0].subtotal;
                db.query(
                  "UPDATE prescription SET amount = ?, note = ?, subtotal = ? WHERE MR_id = ? and drug_id = ?",
                  [amount+result1[0].amount, note, subtotal, MR_id, drug_id],
                  (err, result) => {
                  if (err) {
                    res.send({ err: err });
                  } else {
                    
                  }
                });
              }else{
                db.query(
                  "INSERT INTO prescription (MR_id, drug_id, amount, note, subtotal) VALUES (?, ?, ?, ?, ?)",
                  [MR_id, drug_id, amount, note, subtotal],
                  (err, result) => {
                  if (err) {
                    res.send({ err: err });
                  } else {
                    
                  }
                });
              }
              
            }
          });
          
        } else {
          console.log("未找到该药品");
          res.send({ message: "未找到该药品" });
        }
      }
    });
  }
   res.send({ message: "保存成功！" });
=======
  //   db.query(
  //     "SELECT univalence FROM drugsInfo WHERE drug_id = ?",
  //     [drug_id],
  //     (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       res.send({ err: err });
  //     } else {
  //       console.log(1);
  //       if (result.length > 0){
  //         console.log(result);
  //         subtotal = result[0].univalence * amount;
  //       } else {
  //         console.log("未找到该药品");
  //         res.send({ message: "未找到该药品" });
  //       }
  //     }
  //   });
  //   db.query(
  //     "INSERT INTO prescription (MR_id, drug_id, amount, note, subtotal) VALUES (?, ?, ?, ?, ?)",
  //     [MR_id, drug_id, amount, note, subtotal],
  //     //console.log(err);
  //     //console.log(result);
  //     (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       res.send({ err: err });
  //     } else {
  //       console.log(2);
  //     }
  //   });
  // }
  res.send({ message: "保存成功！" });
>>>>>>> b145c5e (add some new pic)
  });


//药品查找(通过模糊药名)
function Findmed (drug_name){
  db.query("SELECT * FROM drugsInfo WHERE drug_name LIKE %?%)", 
  [drug_name], (err, result) => {
    console.log(err);
    if (err) {
      return 0;
    } else {
      if (result.length == 1) {
        return result[0].drugsInfo;
      } else {
        return 0;
      }
    }
  });
}
//error
function Handleerr(err) {
  var flag = 0;
  if(err.toString().slice(0,22)=="Error: Duplicate entry"){
    flag = 1;
  }
  return flag;
}


app.listen(3000, () => {
  console.log("running server");
});

// router.listen(3000, () => {
//   console.log("listening");
// });


