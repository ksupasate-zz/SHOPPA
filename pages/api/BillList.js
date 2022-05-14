const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function Bill(req, res) {
        db.query("SELECT * FROM Bill  ", (err, result) => {
            if (err) {
                console.log(err);
                res.status(200).json(result);
            } else {
                res.status(200).json(result);
            }
            console.log(result)
        });
}

