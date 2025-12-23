const Customer = require("../models/Customer.js");
const mongoose = require("mongoose");

/**
 *
 * Get /
 * HomePage
 */

const homePage = async (req, res) => {
  const messages = await req.flash("success");
  const locales = {
    title: "User Management System",
    description:
      "NodeJs is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  };

  let perPage = 5;
  let page = req.query.page || 1;

  try {
    const customers = await Customer.find({})
      .sort({ updatedAt: -1 })
      .skip(perPage * page - perPage)
      .limit(perPage)
      .exec();
    const count = await Customer.countDocuments({});
    res.render("index", {
      locales,
      messages,
      customers,
      current: page,
      pages: Math.ceil(count / perPage),
    });
  } catch (error) {
    console.log(error);
  }
};

// const homePage = async (req, res) => {
//   const messages = await req.flash("success");
//   const locales = {
//     title: "User Management System",
//     description:
//       "NodeJs is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
//   };
//   try {
//     const customers = await Customer.find({}).limit(22);
//     res.render("index", {
//       locales,
//       messages,
//       customers,
//     });
//   } catch (error) {
//     console.log(error);
//   }
// };

/**
 *
 * Get /add
 * AddCustomer
 */

const addCustomer = async (req, res) => {
  const locales = {
    title: "Add New Customer | User Management System",
    description: "Add New Customer to the System",
  };
  res.render("customer/add", {
    locales,
  });
};

/**
 *
 * Post /add
 * Create New Customer
 */

const postCustomer = async (req, res) => {
  const { firstName, lastName, telephone, email, details } = req.body;
  const customer = new Customer({
    firstName,
    lastName,
    telephone,
    email,
    details,
  });
  try {
    await customer.save();
    await req.flash("success", "Customer Added Successfully");
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  homePage,
  addCustomer,
  postCustomer,
};
