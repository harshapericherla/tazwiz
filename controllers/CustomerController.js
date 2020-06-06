const mongoose = require('mongoose');
const Customer = mongoose.model('Customer');

const getCustomers = async (req,res) => {
    let customers;
    try{
        customers = await Customer.find({});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }

    res.status(200).json(customers);
    return;
}

const editCustomer = async (req,res) => {

    let customer = req.body;
    try{
        await Customer.findOneAndUpdate({_id:customer._id},{$set:{Approved:customer.Approved}},{new: true});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }

    let customers;
    try{
        customers = await Customer.find({});
    }catch(error)
    {
       res.status(500).json({message:'An error at server occured.'});
       return;   
    }

    res.status(200).json(customers);
    return;
}

module.exports = {
    editCustomer,
    getCustomers
}