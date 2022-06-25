const express = require("express");
const router = express.Router();
const  {
  getProducts,
  getProductById,
} = require("../controller/productControllers");

//@desc Get a products by id from db
//@route GET/api/products
//@access Public

router.get("/", getProducts);
router.get("/:id", getProductById);

module.exports = router;