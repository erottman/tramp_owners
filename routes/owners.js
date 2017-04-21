var express = require('express');
var router = express.Router();
const db = require('../db/connection.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
  db('owners').then(owners => {
    res.json({ owners })
  })
})

module.exports = router;
