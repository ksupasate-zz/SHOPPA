import { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function apiUpComment(req , res){
    const upcomment = req.body.upcomment
    console.log(upcomment)
    db.query(
        'SELECT Review_ID FROM `Review` ORDER BY Review_ID DESC',
        function (err, results) {
            console.log(results[0].Review_ID) // results contains rows returned by server
            let NewReview_ID = parseInt(results[0].Review_ID.substr(2)) + 1
            let StringReview_ID = NewReview_ID.toString()
            let template = "RV0000000"
            let FinalReview_ID = template.substring(0, template.length - StringReview_ID.length) + StringReview_ID
            // console.log(FinalMember_ID)
           
                db.query(
                    //             rating : e.target[0].value 
                    //   commentProduct : e.target[2].value 
                
                                'INSERT INTO `Review`(`Review_ID`, `Member_ID`,`Product_ID`, `Bill_ID`, `Review_Comment`, `Review_Image`, `Review_Score`, `Review_TS`) VALUES (?,"M0000002","P0000002","BL0000002",?,"happyface.jpg",?,CONVERT_TZ(CURRENT_TIMESTAMP,"-07:00","+00:00"))',
                                [FinalReview_ID,upcomment.commentProduct,upcomment.rating] ,
                                function (err, _results) {
                                    console.log(err)
                                    console.log("ASD")
                                    res.status(200).json({message:"EIEI"});
                                     // console.log(results); // results contains rows returned by server
                                 }
                            );
          
            
        });
    
}