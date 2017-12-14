const mongoose = require('mongoose');

let Schema = mongoose.Schema


const userSchema = new Schema({
    username:String,
    email:String,
    token:String
})

const User = mongoose.model('User',userSchema)

module.exports = User;