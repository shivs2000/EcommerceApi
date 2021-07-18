const express=require('express');

const app=express();
const port=3000;
const hostname='localhost';
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
app.get('/',function(req,res,params){
    res.send("hello world")


});
app.post('/postOrder',function(req,res){
    const parameters=req.body;
    
    console.log(parameters.name);

});
app.listen(port,hostname,function(err){
    if(err){
        console.log("error occcured")
    }
    else(console.log("running well"))
})

