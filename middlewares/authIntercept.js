const jwt = require('jsonwebtoken');
const keys = require('../config/keys');


module.exports = (req,res,next) => {
    let decoded;
    let token = req.header('x-access-token');
    if(!token)
    {
        return res.status(400).json({message:'Invalid or no token passed'});
    }

    jwt.verify(token, keys.jwtSecretKey, function(err, response) {
        if (err) return res.status(400).send({ message: 'Failed to authenticate token.' });
        decoded = response;
        next();
    });
    
}