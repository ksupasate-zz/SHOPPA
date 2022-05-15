const mysql = require("mysql2");
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});
export default function Pro(req, res) {
  var { img } = req.query;
  db.query(
    "SELECT Product_ID,Member_ID,Category_ID,Product_Image,Product_Name,Product_Detail,Product_Total,Product_Price,Product_Quantity FROM Product WHERE Category_ID = ? ",
    [img],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).json(result);
      } else {
        res.status(400).json(result);
      }
    }
  );
}