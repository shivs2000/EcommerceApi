const adminLogout=async (req,res)=>{
    if (req.session) {
        req.session.destroy(err => {
          if (err) {
            res.status(400).send('Unable to log out')
          } else {
            res.send('Loggedout successful')
          }
        });
      } else {
        res.send("session doesn't exist");
      }

}
module.exports=adminLogout;