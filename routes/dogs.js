const express = require('express');
const router = express.Router();
const db = require('../db/connection.js');


router.get('/', (req, res, next) => {
  db('dogs').then(dogs => {
    res.json({ dogs })
  })
})


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('dogs')
  .where({id})
  .first()
  .then(dog => {
    res.json({dog})
  })
})


router.get('/:id/edit', (req,res,next) => {
  let id = req.params.id
  db('dogs')
  .where({id})
  .first()
  .then(dog => {
    res.json({dog})
  })
})


module.exports = router;
