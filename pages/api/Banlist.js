const mysql = require('mysql2');
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function Ban(req, res) {
        db.query("SELECT Member_FName,Member_LName,Member_Telephone,Member_Email,Member_BanStatus FROM Members  ", (err, result) => {
            if (err) {
                console.log(err);
                res.status(200).json(result);
            } else {
                res.status(200).json(result);
            }
        });
}
