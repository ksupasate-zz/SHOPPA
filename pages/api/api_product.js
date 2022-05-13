// const mysql = require('mysql2');
// const db = mysql.createConnection({
//     host: process.env.DB_HOST,
//     user: process.env.DB_USER,
//     database: process.env.DB_DATABASE,
//     password: process.env.DB_PASS
// });




// export default function apiUpProduct(_req, res) {
//     db.query(
//         // const body=data.body._req
//         'INSERT INTO Product(Product_ID , Member_ID, Category_ID, Product_Image, Product_Name, Product_Detail, Product_Total, Product_Price, Product_Quantity) VALUES ("P0000015",?,?,?,?,?,0,?,?)',
//         [data.Product_ID,data.Member_ID,data.Category_ID,data.Product_Image,data.Product_Name,data.Product_Detail,data.Product_Total,data.Product_Price,data.Product_Quantity] ,
//         (_err, result) => {
//             if (_err) {
//                 res.status(300).json(result);

//             } else {
//                 res.status(300).json(result);
//                 console.log(Product_ID);
//             }
//         });
// }


import { CompressOutlined } from '@mui/icons-material';
import { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function apiUpProduct(req , res){
    const upproduct = req.body.upproduct
    console.log(upproduct)
    db.query(
        'SELECT Product_ID FROM `Product` ORDER BY Product_ID DESC',
        function (err, results) {
            console.log(results[0].Product_ID) // results contains rows returned by server
            let NewProduct_ID = parseInt(results[0].Product_ID.substr(1)) + 1
            let StringProduct_ID = NewProduct_ID.toString()
            let template = "P0000000"
            let FinalProduct_ID = template.substring(0, template.length - StringProduct_ID.length) + StringProduct_ID
            // console.log(FinalMember_ID)
            db.query(
                'INSERT INTO `Product`(`Product_ID`, `Member_ID`, `Category_ID`, `Product_Image`, `Product_Name`, `Product_Detail`, `Product_Total`, `Product_Price`, `Product_Quantity`) VALUES (?,"M0000002",?,?,?,?,0,?,?)',
                [FinalProduct_ID,upproduct.productCategory,upproduct.productImage,upproduct.productName,upproduct.productDetail,upproduct.productPrice,upproduct.productQuantity] ,
                function (_err, _results) {
                    console.log(_err)
                    console.log("ASD")
                    res.status(200).json({message:"EIEI"});
                     // console.log(results); // results contains rows returned by server
                 }
            );
        });
    
}