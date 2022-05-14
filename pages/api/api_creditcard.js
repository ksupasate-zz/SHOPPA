const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function apiUpCredit(req, res) {
    const upCredit = req.body.upCredit
    console.log(upCredit)
    db.query(
        'INSERT INTO `Payment_Card_Detail`(`Card_Number`, `VALID/THRU`, `CVC`, `Card_Name`) VALUES (?,?,?,?)',
        [upCredit.Card_Number, upCredit.VALID_THRU, upCredit.CVC, upCredit.Card_Name],
        function (err, _results) {
            console.log("ASD")
            res.status(200).json({ result: "EIEI" });
            // console.log(results); // results contains rows returned by server
            db.query('SELECT `Card_ID` FROM `Payment_Card` ORDER BY `Card_ID` DESC',
                function (err, results) {
                    console.log(results[0].Product_ID) // results contains rows returned by server
                    let NewCard_ID = parseInt(results[0].Card_ID.substr(2)) + 1
                    let StringCard_ID = NewCard_ID.toString()
                    let template = "CD0000000"
                    let FinalCard_ID = template.substring(0, template.length - StringCard_ID.length) + StringCard_ID
                    db.query(
                        'INSERT INTO `Payment_Card`(`Card_ID`, `Card_Number`, `Member_ID`) VALUES (?,?,"M0000004")',
                        [FinalCard_ID, upCredit.Card_Number] ,
                    );
                }
            );
        }
    );
}