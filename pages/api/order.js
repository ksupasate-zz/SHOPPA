import { NextApiRequest, NextApiResponse } from 'next'
const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function order(req, res) {
    const data = req.body.finaldata
    // Check that mail is ok
    console.log(data)
    db.query(
        'SELECT `Order_ID` FROM `Order` ORDER BY Order_ID DESC',
        function (err, results) {
            // P0000001
            // 25 , M0000025
            let newOrder_ID, newOrderItem_ID
            if (results.length > 0) {
                newOrder_ID = parseInt(results[0].Order_ID.substr(1)) + 1
            } else {
                newOrder_ID = 0
            }
            let StringOrder_ID = newOrder_ID.toString()
            let template = "O0000000"
            let FinalOrder_ID = template.substring(0, template.length - StringOrder_ID.length) + StringOrder_ID
            // console.log(FinalOrder_ID)
            db.query(
                'INSERT INTO `Order`(`Order_ID`, `Member_ID`, `BranchBank_ID`, `Card_ID`, `Order_Total`) VALUES (?,?,?,?,?)',
                [FinalOrder_ID, data.Member_ID, data.BranchBank_ID, data.Card_ID, data.TotalAll],
                function (err, results1) {
                    db.query(
                        'SELECT `OrderItem_ID` FROM `OrderItem` ORDER BY OrderItem_ID DESC',
                        function (err, results2) {
                            console.log("Khao mai")
                            let template2 = "OI0000000"
                            if (results2.length > 0 && results2[0].OrderItem_ID) {
                                newOrderItem_ID = parseInt(results2[0].OrderItem_ID.substr(2)) + 1
                            } else {
                                newOrderItem_ID = 0
                            }
                            let StringOrderItem_ID = newOrderItem_ID.toString()

                            let FinalOrderItem_ID = template2.substring(0, template2.length - StringOrderItem_ID.length) + StringOrderItem_ID
                            let i = 0
                            while (data.CartItem[i]) {
                                db.query(
                                    'INSERT INTO `OrderItem`(`OrderItem_ID`, `Order_ID`, `Product_ID`, `OrderItem_Total`, `OrderItem_Price`) VALUES (?,?,?,?,?)',
                                    [FinalOrderItem_ID, FinalOrder_ID, data.CartItem[i].id, data.CartItem[i].qty, data.CartItem[i].price],
                                    db.query(
                                        'UPDATE `Product` SET Product_Quantity = Product_Quantity - ? , Product_Total = Product_Total + ? WHERE Product_ID = ?' , 
                                        [data.CartItem[i].qty,data.CartItem[i].qty , data.CartItem[i].id], 
                                       
                                        db.query(
                                            'UPDATE `Members` SET Member_Score = Member_Score + ? WHERE Member_ID = ?' , 
                                            ['50', data.Member_ID], 
                                            function (err, result2) {
                                            }
                                        )
                                    )
                                    
                                );
                                newOrderItem_ID += 1

                                StringOrderItem_ID = newOrderItem_ID.toString()

                                FinalOrderItem_ID = template2.substring(0, template2.length - StringOrderItem_ID.length) + StringOrderItem_ID

                                i++
                            }
                            db.query(
                                'SELECT `Bill_ID` FROM `Bill` ORDER BY Bill_ID DESC',
                                function (err, finalresults) {
                                    let newBill_ID
                                    if (finalresults.length > 0) {
                                        newBill_ID = parseInt(finalresults[0].Bill_ID.substr(1)) + 1
                                    } else {
                                        newBill_ID = 0
                                    }
                                    let StringBill_ID = newBill_ID.toString()
                                    let Finaltemplate = "B00000000"
                                    let FinalBill_ID = Finaltemplate.substring(0, Finaltemplate.length - StringBill_ID.length) + StringBill_ID
                                    let Track = Math.floor(Math.random() * 9000000000) + 1000000000;
                                    let FinalTrack = "TH" + Track.toString()
                                    db.query(
                                        'INSERT INTO `Bill`(`Bill_ID`, `Order_ID`, `Bill_Track`, `Member_ID`) VALUES (?,?,?,?)',
                                        [FinalBill_ID, FinalOrder_ID, FinalTrack, data.Member_ID],
                                        function (err, Finally) {
                                            res.status(200).json(Finally)
                                        }
                                    );
                                }
                            )

                        }
                    );
                }

            );
            res.status(404).json({ message: "OH NO" })
        }
    )
}
