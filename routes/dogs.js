const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');


router.get('/', (req, res, next) => {
  db('dogs').then(dogs => {
    res.json({ dogs })
  })
})


module.exports = router;
