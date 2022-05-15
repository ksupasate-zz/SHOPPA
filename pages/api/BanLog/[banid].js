const mysql = require('mysql2');
const db = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASS
});
export default function BanLog(req, res) {
    var { banid } = req.query
    const upLog = req.body.upLog
    console.log("555555", upLog, banid)
    db.query('SELECT Log_ID FROM Log ORDER BY Log_ID DESC',
        function (err, results) {
            console.log(results[0].Log_ID) // results contains rows returned by server
            let NewLog_ID = parseInt(results[0].Log_ID.substr(1)) + 1
            let StringLog_ID = NewLog_ID.toString()
            let template = "L0000000"
            let FinalLog_ID = template.substring(0, template.length - StringLog_ID.length) + StringLog_ID
            // console.log(FinalMember_ID)
            db.query(
                'INSERT INTO Log(Log_ID,Admin_ID, Member_ID, LogCase_ID, Log_Comment) VALUES (?,"A0000000",?,?,?)',
                [FinalLog_ID, banid, upLog.banType, upLog.Comment],
                function (err, _results) {
                    db.query("UPDATE Members SET Member_Banstatus='1' WHERE Member_ID=?", [banid], (err, result) => {
                        if (err) {
                            console.log(err);
                            res.status(200).json(result);
                        } else {
                            res.status(200).json(result);
                        }
                    });
                    // console.log(results); // results contains rows returned by server
                }
            );
        });
}