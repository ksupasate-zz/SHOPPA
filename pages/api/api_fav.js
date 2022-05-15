

import { NextApiRequest, NextApiResponse } from 'next'

const mysql = require('mysql2');

const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});

export default function apiUpFav(req , res){
    const upFav = req.body.upFav
    console.log(upFav)
    db.query(
        'SELECT Favorite_ID FROM `Favorite` ORDER BY Favorite_ID DESC',
        function (err, results) {
            console.log(results[0].Favorite_ID) // results contains rows returned by server
            let NewFavorite_ID = parseInt(results[0].Favorite_ID.substr(1)) + 1
            let StringFavorite_ID = NewFavorite_ID.toString()
            let template = "F0000000"
            let FinalFavorite_ID = template.substring(0, template.length - StringFavorite_ID.length) + StringFavorite_ID
            // console.log(FinalMember_ID)
            db.query(
                'INSERT INTO `Favorite`(`Favorite_ID`, `Product_ID`, `Member_ID`) VALUES (?,?,?)',
                [FinalFavorite_ID,upFav.favProduct_ID,upFav.favBy] ,
                function (_err, _results) {
                    console.log(_err)
                    console.log("ASD")
                    res.status(200).json({message:"EIEI"});
                     // console.log(results); // results contains rows returned by server
                 }
            );
        });
    
}