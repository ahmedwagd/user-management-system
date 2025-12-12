const router = require("express").Router();
const customerController = require("../controllers/customerController.js");

/**
 *  Customer Routes
 */

router.get("/", customerController.homePage);

router.get("/add", customerController.addCustomer);
router.post("/add", customerController.postCustomer);

module.exports = router;
