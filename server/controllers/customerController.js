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

module.exports = {
  homePage,
};
