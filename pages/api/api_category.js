const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function LogCase(req, res) {
        db.query("SELECT * FROM `Category`", (err, result) => {
            if (err) {
                console.log(err);
                res.status(200).json(result);
            } else {
                res.status(200).json(result);
            }
        });
}