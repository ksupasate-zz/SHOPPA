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
        'SELECT ROUND(AVG(r.Review_Score),2) AS RS FROM Review r , Product p  WHERE p.Member_ID = ? AND r.Product_ID = p.Product_ID ', [id],
        function (err, results) {
            res.status(200).json(results)
            console.log(results); // results contains rows returned by server
        }
    );
}