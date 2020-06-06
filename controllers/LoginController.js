const mongoose = require('mongoose');
const User = mongoose.model('User');
const jwt = require('jsonwebtoken');
const keys = require('../config/keys');

const loginUser = async (req,res) => {

    let user = req.body;
    try{
        user = await User.find({email:user.email,password:user.password});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }

    if(!user || user.length == 0)
    {
        res.status(500).json({message:'Please enter correct credentials'});
        return;
    }
    let token = jwt.sign({id: user[0]._id},keys.jwtSecretKey,{expiresIn: 86400});
    res.status(200).json(token);
    return;
}

module.exports = {
    loginUser
}