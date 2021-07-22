const query=require('../models');
const getProducts= async (req,res)=>{
  try{
    const para=req.body;
    if(req.session){
    

       const rows= await query.Product.findAll({
        
        })
        console.log(rows);
        res.send(rows);

   

    }
    else{

        res.send("login-YOU ARE NOT LOGGEDIN");
    }
  }
 catch(e){
  
  }
};
module.exports=getProducts;