const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function Pro(req, res) {
    var { id } = req.query
    db.query("SELECT Product_ID,Member_ID,Category_ID,Product_Image,Product_Name,Product_Detail,Product_Total,Product_Price,Product_Quantity FROM Product WHERE Product_ID = ?", [id], (err, result) => {
        db.query("SELECT Review_Comment,Review_Image,Review_Score,Review_TS,Product_ID FROM Review WHERE Product_ID = ? ", [id], (err, result2) => {
            console.log(result2)
            if (err) {
                console.log(err);
                res.status(400).json({ result, result2 });
            } else {
                res.status(400).json({ result, result2 });
            }
        })
    });
}
