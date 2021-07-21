const Query=require('../models');
const getUser=async(req,res)=>{
    try{
const value=await Query.User.findAll({});
  res.send(value);
    }
    catch(e){console.log(e);

    }


};
module.exports=getUser;