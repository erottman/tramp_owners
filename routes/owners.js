var express = require('express');
var router = express.Router();
const db = require('../db/connection.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
  db('owners')
  .then(owners => {
    res.json({ owners })
  })
  .catch(err => {
    console.log(err);
  })
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('owners')
  .where({id})
  .first()
  .then(owner => {
    res.json({owner})
  })
  .catch(err => {
    console.log(err);
  })
});


router.post('/', (req, res, next) => {
  let owner = {
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      address_line_1: req.body.address_line_1,
      address_line_2: req.body.address_line_2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip ,
      phone_number: req.body.phone_number,
      email_address: req.body.email_address,
      user_id: req.body.user_id,
  }
  db('owners')
  .insert(owner, '*')
  .then(owner => {
    let id = owner[0].id
    res.json({id})
  })
  .catch(err => {
    console.log(err);
  })
})

module.exports = router;
