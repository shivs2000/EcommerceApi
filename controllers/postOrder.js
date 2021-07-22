const query=require('../models');
const postOrder=async (req,res)=>{
   const para=req.body;
   try{
        if(req.session){
            
       const userId=req.session.userID;
       await query.Order.create({
           userId:userId,
           productId:para.productId,




       }).then(()=>{
           

       }).catch((e)=>{
           console.log(e);
           res.send("something wrong happend");
       });
       // console.log("after");
       const productResult=await query.Product.findOne({
           where:{
               id:para.productId,
           }
       })
       const newAvailable=productResult.available-1;
       //console.log("new");
       await query.Product.update({
           
           available:newAvailable,

       },{where:{
        id:para.productId,
        }}).then((result)=>{
           
        res.send("order placed");
       }).catch(()=>{

       });

       


   }
}
catch(e){
    console.log("try error");
    console.log(e);
}
};
module.exports=postOrder;