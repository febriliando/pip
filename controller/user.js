const User = require('../models/user');

class UserController{
    static findAll(req,res){
        User.find()
        .then(user=>{
            res.send(user);
        })
        .catch(err=>{
            res.send(err);
        })
    }
    
    static createUser(req,res){
        
        let user = new User({
            username : req.body.username,
            email:req.body.email,
            token:req.body.token
        });
        user.save()
        .then(userBaru=>{
            res.status(200).json({
                message:"New User Added To Collection",
                data: userBaru;
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:"Invalid User"
            })
        })
    }
    
    
}

module.exports = UserController;    
    
    
    

