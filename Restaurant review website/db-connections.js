var mysql = require('mysql');
var connection = mysql.createConnection({
    host:'localhost',
    //host:'mysqlinstance.c3exabsb8vob.us-east-1.rds.amazonaws.com',
    port:'3306',
    user:'root',
    password:'teddybear456',
    //user:'admin',
    //password:'teddybear456',
    database:'restaurant_review'
});

connection.connect(err => { 
    if (err) throw err;
    console.log('Connected to DB');
});
module.exports = connection;