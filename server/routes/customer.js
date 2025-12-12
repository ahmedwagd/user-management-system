const router = require("express").Router();
const customerController = require("../controllers/customerController.js");

/**
 *  Customer Routes
 */

router.get("/", customerController.homePage);

module.exports = router;
