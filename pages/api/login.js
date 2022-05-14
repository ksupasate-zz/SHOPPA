import { NextApiRequest, NextApiResponse } from 'next'
const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function login(req, res) {
    const data = req.body.data
    console.log(data)
    db.query(
        'SELECT Member_ID FROM `Members` WHERE `Member_Email` = ? AND `Member_Password` = ?', [data.Email , data.Password],
        function (err, results) {
            console.log(results)
            if(results){
                res.status(200).json({check : "Member" , id : results[0].Member_ID})
            }else{
                db.query( // Check Admin
                    'SELECT Admin_ID FROM `Admin` WHERE Admin_Email = ? AND Admin_Password = ?', [data.Email , data.Password],
                    function (err, results) {
                        if(results){
                            res.status(200).json({check : "Admin" , id : results[0].Admin_ID})
                        }else{
                            res.status(200).json({check : "Can't Login"})
                        }
                    }
                )   
            }
       }
    );
}