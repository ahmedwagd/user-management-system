const Customer = require("../models/Customer.js");
const mongoose = require("mongoose");

/**
 *
 * Get /
 * HomePage
 */

const homePage = async (req, res) => {
  const locales = {
    title: "User Management System",
    description:
      "NodeJs is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  };
  res.render("index", {
    locales,
  });
};

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
  const locales = {
    title: "New Customer Added!",
    description: "New Customer Added to the System",
  };
  const { firstName, lastName, telephone, email, details } = req.body;
  const customer = new Customer({
    firstName,
    lastName,
    telephone,
    email,
    details,
  });
  console.log(customer);
  try {
    await customer.save();
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
