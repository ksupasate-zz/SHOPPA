const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function apiUpCredit(req, res) {
    const confirm = req.body.confirm
    console.log(results[0].Product_ID) // results contains rows returned by server
    db.query('SELECT Order_ID FROM Order ORDER BY Order_ID DESC',
        function (err, results) {
            console.log(results[0].Order_ID) // results contains rows returned by server
            let NewOrder_ID = parseInt(results[0].Order_ID.substr(1)) + 1
            let StringOrder_ID = NewOrder_ID.toString()
            let template = "O0000000"
            let FinalOrder_ID = template.substring(0, template.length - StringOrder_ID.length) + StringOrder_ID
            db.query('SELECT Cart_ID FROM Order ORDER BY Cart_ID DESC',
                function (err, results) {
                    console.log(results[0].Cart_ID) // results contains rows returned by server
                    let NewCart_ID = parseInt(results[0].Cart_ID.substr(1)) + 1
                    let StringCart_ID = NewCart_ID.toString()
                    let template = "C0000000"
                    let FinalCart_ID = template.substring(0, template.length - StringCart_ID.length) + StringCart_ID
                    db.query(
                        'INSERT INTO `Order`(`Order_ID`, `Cart_ID`, `Member_ID`, `Card_ID`, `Order_Total`) VALUES (?,?,?,?,?)',
                        [FinalOrder_ID, FinalCart_ID, confirm.Member_ID, confirm.Card_ID, confirm.Order_Total],
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
            );
        }
    );
}