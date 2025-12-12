const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const expressLayout = require("express-ejs-layouts");
const flash = require("connect-flash");
const session = require("express-session");
const connectDB = require("./server/config/db.js");

const app = express();
const PORT = 3030 || process.env.PORT;
connectDB();

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

// Static Files
app.use(express.static("public"));

// Express Session
app.use(
  session({
    secret: "secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7,
    },
  })
);

// Express Flash Messages
app.use(flash());

// Templating Engine
app.use(expressLayout);
app.set("layout", "./layouts/main");
app.set("view engine", "ejs");

// Routes
app.use("/", require("./server/routes/customer.js"));

// Handle 404
app.use((req, res, next) => {
  res.locals.locales = {
    title: "User Management System",
    description:
      "NodeJs is a JavaScript runtime built on Chrome's V8 JavaScript engine.",
  };
  res.status(404).render("404");
  next();
});

app.listen(PORT, () => {
  console.log(`App Run on port ${PORT}`);
});
