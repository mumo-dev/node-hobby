var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.json({
    firstName: "Samuel",
    lastName: "Mumo",
    email: "sam@gmail.com",
    phone: "254795405469",
  })
});

module.exports = router;
