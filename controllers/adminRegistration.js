const query=require('../models');
const bcrypt = require('bcryptjs');
const {validationResult}=require('express-validator');
const adminRegistraion= async (req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.send( errors.array()[0].msg)

    }
   const para=req.body;
   console.log(para);
   try{
    const hashPass = await bcrypt.hash(para.password, 12);
    const  row=await query.Admin.findAll({
        where: {
            userName:para.name,
          }

    });
   
    if (row.length>=1){
        res.send("Username already in use")
    }
    else{
    query.Admin.create({
        userName:para.name,
        password:hashPass,
        email:para.email
    }).then(function (result) {
        // Transaction has been committed
        // result is whatever the result of the promise chain returned to the transaction callback
        res.send("registration successful.YOU CAN LOGIN NOW")
      }).catch(function (err) {
        // Transaction has been rolled back
        // err is whatever rejected the promise chain returned to the transaction callback
        //console.log(err.errors);
        res.send("failed!!!")
      });
    }
}
    catch(e){

    }
 
};
module.exports=adminRegistraion;