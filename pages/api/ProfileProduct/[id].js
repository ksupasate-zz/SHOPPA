import { NextApiRequest, NextApiResponse } from 'next'
const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function Pro(req, res) {
    var { id } = req.query
    console.log("555555", id)
    db.query("SELECT Member_ID,Product_ID,Product_Image,Product_Name,Product_Price FROM Product WHERE Member_ID =?", [id], (err, result) => {
        if (err) {
            res.status(200).json(result);
        } else {
            res.status(200).json(result);
        }
    });
    // console.log(results); // results contains rows returned by server
}