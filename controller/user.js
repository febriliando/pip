const User = require('../models/user');
const ObjectID = require('mongodb').ObjectID;
const axios = require('axios')

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
            username : req.body.name,
            email: req.body.email
        });
        user.save()
        .then(userBaru=>{
            res.status(200).json({
                message:"New User Added To Collection",
                data: userBaru
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:"Invalid User"
            })
        })
    }

    static destroyUser (req,res) {
        User.remove({_id :ObjectID(req.params.id)})
        .then(data => {
            res.status(200).send({
                msg  : "succes remove",
                data : data
            })
        })
        .catch(err => {
            res.status(500).send({
                msg: "error"
            })
        })
    }

    static findById(req,res) {
        User.find({_id : ObjectID(req.params.id)})
        .then(data => {
            res.status(200).send({
                msg  : "succes find by id",
                data : data
            })
        })
        .catch(err => {
            res.status(500).send({
                msg : err
            })
        })
    }

    static update (req,res){
        Book.findOne({_id : ObjectID(req.params.id)})
        .then(data => {
                data.username = req.body.username || data.username
            data.save()
            .then(dataUpdate => {
                res.status(200).send({
                    msg: "succes updated",
                    data : dataUpdate
                })
            })
        })
        .catch(err => {
            res.status(500).send({
                msg : err
            })
        })
    }

    static search(req,res){
        console.log('ini di server  =====> ',req.body)
        axios.get(`http://api.walmartlabs.com/v1/search?query=${req.body.data}&format=json&apiKey=63hzn8trymendbtajfa9dx98`)
        .then(function (response) {
            let array = [];
            response.data.items.map(r => {
                array.push({
                    name : r.name,
                    price : r.salePrice * 13000,
                    category : r.categoryPath
                })
            })
            console.log('ini di server',array)
            
            res.status(200).send({
                msg : "succes",
                data: array
            })
        })
        .catch(function (error) {
            res.status(500).send({
                msg: error
            })
        });
    
    }

    

}
    
module.exports = UserController
