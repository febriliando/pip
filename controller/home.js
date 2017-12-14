const Item = require('../models/item');

class ItemController{
    static findAll(req,res){
        Item.find()
        .then(item=>{
            res.send(item);
        })
        .catch(err=>{
            res.send(err);
        })
    }
    
    static createItem(req,res){
        
        let item = new Item({
            label : req.body.label,
            product:req.body.product,
            description:req.body.description,
            category:req.body.category,
            price:req.body.price 
        });
        item.save()
        .then(itemBaru=>{
            res.status(200).json({
                message:"New Item Added To Collection",
                data: itemBaru
            })
        })
        .catch(err=>{
            res.status(500).json({
                message:"Invalid Item"
            })
        })
    }
    
    
}

module.exports = ItemController;    

