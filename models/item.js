const mongoose = require('mongoose');

let Schema = mongoose.Schema


const itemSchema = new Schema({
    label:String,
    product:String,
    description:String,
    category:String,
    price:Number
})

const Item = mongoose.model('Item',itemSchema)

module.exports = Item;