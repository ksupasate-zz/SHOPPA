const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function BanLog(req, res) {
    var { id } = req.query
    console.log("555555", id)
    db.query("UPDATE Bill SET Bill_Status='1' WHERE Bill_ID=?", [id], (err, result) => {
        if (err) {
            console.log(err);
            res.status(200).json(result);
        } else {
            res.status(200).json(result);
        }
    });
    // console.log(results); // results contains rows returned by server


}