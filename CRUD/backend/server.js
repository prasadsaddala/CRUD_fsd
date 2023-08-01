const express = require("express");
const cors = require("cors");
const mysql = require("mysql");

const app = express();
app.use(express.json());
app.use(cors());
app.use(cors());

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Saddala@1105",
    database: "nodeems"
})
   
//register
app.post('/emp',(req, res) =>{
    const sql = "INSERT INTO login('name', 'email', 'password') values (?)";
    const values = [
        req.body.name,
        req.body.email,
        req.body.password

    ] 

    db.query(sql,[values], (err, data) =>{
        if(err) {
            return res.json("Error");
        }
        return res.json(data);
    })
})
       
//login
app.post('/login',(req, res) =>{
    const sql = "SELECT  * FROM login Where 'email' = ? AND 'password' =?";
    
    db.query(sql,[req.body.email,req.body.password], (err, data) =>{
        if(err) {
            return res.json("Error");
        }
        if(data.length > 0) {
            return res.json("success");

        } else {
            return res.json("failed");
        }
    })
})

app.get("/", (req, res) => {
    const sql = "SELECT * FROM employee";
    db.query(sql,(err, data) =>{
        if (err) return res.json("Error");
        return res.json(data);
    })
})

app.post('/create',(req, res) =>{
    const sql = "INSERT INTO employee('name', 'gender', 'dob', 'salary', 'department') values (?)";
    const values = [
        req.body.name,
        req.body.gender,
        req.body.dob,
        req.body.salary,
        req.body.department,

    ]
    db.query(sql,[values], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.put('/update/:id',(req, res) =>{
    const sql = "update employee set 'name' = ?, 'gender' = ?, 'dob' = ?, 'salary' = ?, 'department = ?' where ID = ?";
    const values = [
        req.body.name,
        req.body.gender,
        req.body.dob,
        req.body.salary,
        req.body.department,

    ]
    const id = req.params.id;

    db.query(sql,[...values, id], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})

app.delete('/employee/:id',(req, res) =>{
    const sql = "DELETE FROM employee where ID = ?";
    
    const id = req.params.id;

    db.query(sql,[id], (err, data) =>{
        if(err) return res.json("Error");
        return res.json(data);
    })
})
app.listen(8081, () =>{
    console.log("listening")
})
