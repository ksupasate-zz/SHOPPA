const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function Fav(req, res) {
        db.query(" SELECT COUNT(c.Category_ID) AS countCate,c.Category_Name FROM Category c,Product p,Favorite f WHERE c.Category_ID = p.Category_ID AND p.Product_ID = f.Product_ID GROUP BY c.Category_ID,c.Category_Name ORDER BY countCate DESC", (err, result) => {
            if (err) {
                res.status(300).json(result);
                
            } else {
                res.status(300).json(result);
            }
        });
}
