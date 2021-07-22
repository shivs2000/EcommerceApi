const query=require('../models');
const getOrders=async (req,res)=>{
    try{
        if(req.session){
            //console.log(req.session.userID);
            const orders= await query.Order.findAll({
                where:{
                    userId:req.session.userID
                }
            });
            res.send(orders);
     
    }
    else{
        res.send("login first");
    }
    }
    catch(e){

    }
};
module.exports=getOrders;