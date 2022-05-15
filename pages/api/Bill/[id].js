const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function Bill(req, res) {
        const bill_ID = req.query.id
        // console.log(bill_ID)
        db.query('SELECT * FROM `Bill` WHERE `Bill_ID` = ?',[bill_ID],
            function (err, results) {
                // console.log(results)
                if(results.length > 0){
                    // console.log(results[0].Order_ID)
                    const Order_ID = results[0].Order_ID
                    db.query('SELECT * FROM `Order` WHERE `Order_ID` = ?',[Order_ID],
                        function(err,results1){
                            if(err){
                                console.log(err)
                                res.status(400).json({'message':'error'})
                                return;
                            }
                            const BB_ID = results1[0].BranchBank_ID
                            db.query('SELECT * FROM `BranchBank` WHERE `BranchBank_ID` = ?',[BB_ID],
                                function(err,results2){
                                    if(err){
                                        console.log(err)
                                        res.status(400).json({'message':'error'})
                                        return;
                                    }
                                    db.query('SELECT * FROM `OrderItem` o LEFT JOIN `Product` p ON p.`Product_ID` = o.`Product_ID`  WHERE `Order_ID` = ?',[Order_ID],
                                    function(err,results3){
                                        if(err){
                                            console.log(err)
                                            res.status(400).json({'message':'error'})
                                            return;
                                        }
                                        res.status(200).json({results,results1,results2,results3})
                                    }
                                    );
                                }
                            );  
                        }
                    );
                }else{
                    res.status(400).json({'message':'error'})
                }                
        });  
}