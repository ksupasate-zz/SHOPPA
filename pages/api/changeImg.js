import { useRouter } from "next/router";

const mysql = require("mysql2");
const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});

export default function changeImg(req, res) {
  const data = req.body.changeProduct;
  console.log(data);
  db.query(
    "UPDATE Product SET `Product_Image` = ? WHERE `Product_ID` = ?",[data.Product_Image,data.Product_ID],
    function (err, results) {
        useRouter.push("/profile")
        res.status(200).json("WOW")
    }   
  );
}