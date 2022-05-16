import { convertLegacyProps } from "antd/lib/button/button";

const mysql = require("mysql2");
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});
export default function showCredit(req, res) {
  var id = req.query;
  console.log(id)
  db.query(
    'SELECT Card_Number , Card_ID FROM `Payment_Card` WHERE `Member_ID` = ?', [id.id],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(200).json(result);
      } else {
        res.status(200).json(result);
      }
    }
  );
}
