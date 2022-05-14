import { NextApiRequest, NextApiResponse } from 'next'
const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function register(req, res) {
    const data = req.body.data
    // Check that mail is ok
    db.query(
        'SELECT COUNT(Admin_id) AS count FROM `Admin` WHERE Admin_Email = ?', [data.Email],
        function (err, results) {
            // res.status(200).json(results)
            if(results[0].count > 0){
                res.status(200).send({message : "Email is already used"})
                // console.log("Email is already used")
            }
            console.log("Email is okay"); // results contains rows returned by server
       }
    );

    // Run MemberID
    db.query(
        'SELECT Member_ID FROM `Members` ORDER BY Member_ID DESC',
        function (err, results) {
            // P0000001
            // 25 , M0000025
            console.log(results[0].Member_ID) // results contains rows returned by server
            let NewMember_ID = parseInt(results[0].Member_ID.substr(1)) + 1
            let StringMember_ID = NewMember_ID.toString()
            let template = "M0000000"
            let FinalMember_ID = template.substring(0, template.length - StringMember_ID.length) + StringMember_ID
            // console.log(FinalMember_ID)
            let Role_ID = "R01" // Customer
            let Rank_ID = "N"  // Normal
            db.query(
                'INSERT INTO `Members`(`Member_ID`, `Role_ID`, `Rank_ID`, `Member_FName`, `Member_LName`, `Member_Email`, `Member_Telephone`, `Member_Password`, `Member_Address`, `Member_DisplayName`, `Member_Score`, `Member_BanStatus`, `Member_Image`, `Member_Sex`, `Member_DOB`) VALUES (?,?,?,?,?,?,?,?,?,?,0,0,"",?,?)',
                [FinalMember_ID, Role_ID, Rank_ID, data.FName, data.LName, data.Email, data.Phone, data.ConPassword, data.Address, data.FName, data.Gender, data.DOB],
                function (err, results) {
                    if (results) {
                        res.status(200).json({message : "Success" , id : FinalMember_ID})
                        console.log("Inserted"); // results contains rows returned by server
                        // console.log(results)
                    } else {
                        res.status(500).json({ message: err })
                    }
                }
            );
        }
    );
    // console.log("WOW" + FinalMember_ID)
}