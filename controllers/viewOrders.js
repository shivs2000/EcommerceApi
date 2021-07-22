const query=require('../models');
const viewOrders=async (req,res)=>{
    try{
        if(req.session){
            //console.log(req.session.userID);
            const orders= await query.Order.findAll({
               
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
module.exports=viewOrders;