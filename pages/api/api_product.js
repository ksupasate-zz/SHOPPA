import { CompressOutlined } from "@mui/icons-material";
import { NextApiRequest, NextApiResponse } from "next";
import formidable from "formidable";



const mysql = require("mysql2");
const moment = require("moment")

const timeStamp = moment().format("DD-MM-YYYY");
const fs = require("fs")





const db = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  database: process.env.DB_DATABASE,
  password: process.env.DB_PASS,
});

export default function apiUpProduct(req, res) {
  const upproduct = req.body.upproduct;
  console.log(upproduct);
  db.query(
    "SELECT Product_ID FROM `Product` ORDER BY Product_ID DESC",
    function (err, results) {
      console.log(results[0].Product_ID); // results contains rows returned by server
      let NewProduct_ID = parseInt(results[0].Product_ID.substr(1)) + 1;
      let StringProduct_ID = NewProduct_ID.toString();
      let template = "P0000000";
      let FinalProduct_ID =
        template.substring(0, template.length - StringProduct_ID.length) +
        StringProduct_ID;
      // console.log(FinalMember_ID)
      db.query(
        'INSERT INTO `Product`(`Product_ID`, `Member_ID`, `Category_ID`, `Product_Image`, `Product_Name`, `Product_Detail`, `Product_Total`, `Product_Price`, `Product_Quantity`) VALUES (?,?,?,?,?,?,0,?,?)',
        [
          FinalProduct_ID,
          upproduct.MemberID,
          upproduct.productCategory,
          upproduct.productImage,
          upproduct.productName,
          upproduct.productDetail,
          upproduct.productPrice,
          upproduct.productQuantity,
        ],
        function (_err, _results) {
          console.log(_err);
          console.log("ASD");
          
        //   fs.mkdir(
        //     `./public/product/${timeStamp}`,
        //     { recursive: true },
        //     function (_err) {
        //       return console.log(_err);
        //     }
        //   );
    //       const data2 = fs.readFileSync(upproduct.productImage);
    //   fs.writeFileSync(`./public/product/${timeStamp}`, data2);
    //   fs.unlinkSync(upproduct.productImage);
          // console.log(results); // results contains rows returned by server
        }
      );
    }
  );
}