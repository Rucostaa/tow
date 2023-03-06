const router = require("express").Router();
router.get("/", (req, res) => {
  res.render("index");
});
router.get("/produtos", (req, res) => {
  res.render("produtos");
});
router.get("/contacte-nos", (req, res) => {
  res.render("contactenos");
});
router.get("/sobre-nos", (req, res) => {
  res.render("sobrenos");
});
module.exports = router;
