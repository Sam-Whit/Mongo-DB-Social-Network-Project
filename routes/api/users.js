const express = require("express");
const router = express.Router();

//Before every route
//@route GET api/users
//@description Test route
//@accessvalue public or private - this ones public

router.get("/", (req, res) => res.send("User Route"));

module.exports = router;
