const mongoose = require('mongoose');
const Product = mongoose.model('Product');

const editProduct = async (req,res) => {

    let product = req.body;
    try{
        await Product.findOneAndUpdate({_id:product._id},{$set:{price:product.price}},{new: true});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }

    let products;
    try{
        products = await Product.find({});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }
    res.status(200).json(products);
  
    return;
}

const getProducts = async (req,res) => {
    let products;
    try{
        products = await Product.find({});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }

    res.status(200).json(products);
    return;
}

module.exports = {
    getProducts,
    editProduct
}