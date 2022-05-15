const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function loginAdmin(req, res) {
    const data = req.body.data
    console.log(data)
    db.query( // Check Admin
        'SELECT Admin_ID FROM `Admin` WHERE `Admin_Email` = ? AND `Admin_Password` = ?', [data.Email, data.Password],
        function (err, results) {
            if (results[0]) {
                res.status(200).json({ check: "Admin", id: results[0].Admin_ID })
            } else {
                res.status(200).json({ check: "Can't Login" })
            }
        }
    )
}
/*
                
                */