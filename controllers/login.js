const bcrypt=require('bcryptjs');
const {validationResult}=require('express-validator');
const query=require('../models');
const login=async (req,res)=>{
    const errors = validationResult(req);
    const para=req.body;
    if(!errors.isEmpty()){
        return res.send( errors.array()[0].msg)

    }
    try{
        const row= await query.User.findAll({
        where:{
        userName:para.name,
        }
        });
        console.log(row);
        if(row.length!=1){
            return res.send("Invalid email")
        }
        const checkPass = await bcrypt.compare(para.password, row[0].password);

        if (checkPass === true) {
            req.session.userID = row[0].id;
            return res.send("logged in Successfully");
        }
    }
    catch(e){

    }
    

};
module.exports=login;