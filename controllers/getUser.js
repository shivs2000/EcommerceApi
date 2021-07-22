const Query=require('../models');
const getUser=async(req,res)=>{
    try{
const value=await Query.User.findAll({
  where:{
    id:req.session.userID
  }
});
  res.send(value);
    }
    catch(e){console.log(e);

    }


};
module.exports=getUser;