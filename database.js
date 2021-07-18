const mysql=require('mysql');
const con=mysql.createConnection({
host:'localhost',
user:'root',
password:'brotik1234',
database:'ecommerce',
});

module.exports=con.connect();
