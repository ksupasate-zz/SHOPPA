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


import { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function apiUpLog(req , res){
    const upLog = req.body.upLog
    console.log(upLog)
    db.query(
        'SELECT Log_ID FROM `Log` ORDER BY Log_ID DESC',
        function (err, results) {
            console.log(results[0].Log_ID) // results contains rows returned by server
            let NewLog_ID = parseInt(results[0].Log_ID.substr(1)) + 1
            let StringLog_ID = NewLog_ID.toString()
            let template = "L0000000"
            let FinalLog_ID = template.substring(0, template.length - StringLog_ID.length) + StringLog_ID
            // console.log(FinalMember_ID)
            db.query(
                'INSERT INTO `Log`(`Log_ID`,`Admin_ID`, `Member_ID`, `LogCase_ID`, `Log_Comment`) VALUES (?,"A0000000","M0000000",?,?)',
                [FinalLog_ID,upLog.banType,upLog.Comment] ,
                function (err, _results) {
                    console.log("ASD")
                    res.status(200).json({message:"EIEI"});
                     // console.log(results); // results contains rows returned by server
                 }
            );
        });
    
}