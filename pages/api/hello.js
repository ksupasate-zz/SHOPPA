const express = require('express');
const app= express();
const cors = require('cors');
const mysql = require('mysql2');
app.use(cors());
app.use(express.json());

const dotenv=require('dotenv');
dotenv.config();

const db = mysql.createConnection({
    host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_DATABASE,
        password: process.env.DB_PASS
});
console.log(process.env.DB_HOST);
db.connect((err) =>{
    if(err){
        throw err;
    }
    console.log('MySQL Connected');
});
app.get('/Members',(req,res)=>{
    db.query("SELECT Member_FName,Member_LName,Member_Telephone,Member_Email,Member_BanStatus FROM Members ",(err,result)=>{
        if(err){
            console.log(err);
        }else{
        res.send(result);
    }
    });
})
app.listen('3001',()=>{
    console.log('Server running on port 3001');
})