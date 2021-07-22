const query=require('../models');
const postProducts= async (req,res)=>{
  try{
    const para=req.body;
    if(req.session){
     const row=await query.Admin.findOne({
         where:{
             userName:para.name
         }
     
     })
     console.log(row);
    if(row.isAdmin){

        await query.Product.create({
        productName:para.product.productName,
        productType:para.product.productType,
        available:para.product.available,
        price:para.product.price,
        discount:para.product.discount,
        })

    }

    }
    else{

        res.send("login-YOU ARE NOT LOGGEDIN");
    }
  }
 catch(e){
  
  }
};
module.exports=postProducts;