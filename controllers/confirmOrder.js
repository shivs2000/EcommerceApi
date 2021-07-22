const query=require('../models');
const confirmOrder=async (req,res)=>{
   const para=req.body;
   try{
        if(req.session){
       const adminId=req.session.userID;
       const row=await query.Admin.findOne({
           where:{
               id:adminId
           }
       })
       if(row.isAdmin){
       await query.Order.update({
           orderStatus:"confirmed",
           deliveryDate:para.deliveryDate
       },{
           where:{
               id:para.orderId

       }}).catch((e)=>{
           console.log(e);
           res.send("something wrong happend");
       });
    }
       // console.log("after");
    }
   else{
       res.send("login first");

   }
}
catch(e){
    console.log("try error");
    console.log(e);
}
};
module.exports=confirmOrder;