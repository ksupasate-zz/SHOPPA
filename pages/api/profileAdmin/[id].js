import { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function wowza(req, res) {
    const { id } = req.query
    console.log(id)
    db.query(
        'SELECT * FROM Admin WHERE Admin_ID = ?', [id],
        function (err, results) {
            res.status(200).json(results)
            // console.log(results); // results contains rows returned by server
        }
    );
}