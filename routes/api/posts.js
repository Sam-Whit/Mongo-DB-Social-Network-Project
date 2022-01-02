const express = require("express");
const router = express.Router();

//Before every route
//@route GET api/Posts
//@description Test route
//@accessvalue public or private - this ones public

router.get("/", (req, res) => res.send("Posts Route"));

module.exports = router;
