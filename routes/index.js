const express = require('express');
const router = express.Router();

const productCtrl = require('./../controllers/ProductController');
const customerCtrl = require('./../controllers/CustomerController');

router.get("/get_products",productCtrl.getProducts);
router.put("/edit_product",productCtrl.editProduct);
router.put("/edit_customer",customerCtrl.editCustomer);
router.get("/get_customers",customerCtrl.getCustomers);

module.exports = router;