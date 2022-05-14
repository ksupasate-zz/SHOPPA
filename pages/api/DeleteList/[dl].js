const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function Delete(req, res) {
       var {dl} = req.query
        db.query('DELETE FROM Members WHERE `Member_ID`= ? ',[dl], (err, result) => {
            console.log(dl)
            if (err) {
                console.log(err);
                res.status(200).json(result);
            } else {
                res.status(200).json(result);
            }
              
        });
 
}