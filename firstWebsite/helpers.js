var express = require('express');
var mysql = require('mysql');
var app = express();

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Nmkkvw55",
    database: "first"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});


app.get('/', function (req, resp) {
    //about mysql
    con.query("SELECT * FROM Pets", function (error, rows, fields) {
        if(!!error){
            console.log("Error in the query");

        }else{
            console.log("Successful query");
            console.log(rows[0].Name);
            resp.send("Hello, " +rows[0].Name);
            alert(rows[0].Name);

        }

    });

});

app.listen("1337");