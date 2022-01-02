const express = require("express");
const router = express.Router();

//Before every route
//@route GET api/auth
//@description Test route
//@accessvalue public or private - this ones public

router.get("/", (req, res) => res.send("Author Route"));

module.exports = router;
