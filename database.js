const {Sequelize}=require('sequelize');
const sequelize=new Sequelize('ecommerce','root','brotik1234',{
    host:'localhost',
    dialect:'mysql',
    dialectOptions: {
        // useUTC: false, //for reading from database
        dateStrings: true,
        typeCast: true,
        timezone: "+05:30"
      },
      timezone: "+05:30", //for writing to database
     
})


module.exports=sequelize;
