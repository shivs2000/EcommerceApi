const express=require('express');
const session = require('express-session');
const app=express();
const port=3000;
const hostname='localhost';
const sequelize=require('./database');
var MySQLStore = require('express-mysql-session')(session);

var options = {
	host: 'localhost',
	user: 'root',
	password: 'brotik1234',
	database: 'ecommerce'
};

var sessionStore = new MySQLStore(options);
async function check(){
    try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
check();

const router=require('./routes');
app.use(session({
    name: 'session',
    secret: 'AsdsffncdjvjsbvdjvjbdjvutrieosdcAfffAeWkk2knf3trt5sdfnk211njenty',
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 24 *3600 * 1000, // 24hr
    },
    store:sessionStore,
}));
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.use(router);
app.listen(port,hostname,function(err){
    if(err){
        console.log("error occcured")
    }
    else(console.log("running well"))
})

