var express = require('express');
var router = express.Router();
const db = require('../db/connection.js');

/* GET users listing. */
router.get('/', (req, res, next) => {
  db('dogs')
  .then(dogs => {
    res.json(dogs)
  })
  .catch(err => {
    console.log(err);
  })
});


router.get('/:id', (req, res, next) => {
  let id = req.params.id
  db('dogs')
  .where({id})
  .first()
  .then(dog => {
    res.json(dog)
  })
  .catch(err => {
    console.log(err);
  })
});


router.post('/', (req, res, next) => {
  let dog = {
      owner_id: req.body.owner_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      breed: req.body.breed,
      size: req.body.size,
      allergies: req.body.allergies,
      kids: req.body.kids,
      other_dogs: req.body.other_dogs,
      other_people: req.body.other_people,
      fav_treat: req.body.fav_treat,
      bio: req.body.bio,
      image: req.body.image,
    }
  db('dogs')
  .insert(dog, '*')
  .then(dog => {
    let id = dog[0].id
    res.json(dog)
  })
  .catch(err => {
    console.log(err);
  })
})

router.put('/:id', (req,res,next) => {
  let id = req.params.id
  let dog = {
      owner_id: req.body.owner_id,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      breed: req.body.breed,
      size: req.body.size,
      allergies: req.body.allergies,
      kids: req.body.kids,
      other_dogs: req.body.other_dogs,
      other_people: req.body.other_people,
      fav_treat: req.body.fav_treat,
      bio: req.body.bio,
      image: req.body.image,
    }
  db('dogs')
  .update(dog, '*')
  .where({id})
  .returning('*')
  .then(updated => {
    res.json(updated)
  })
  .catch(err => {
    console.log(err);
  })
})


  router.delete('/:id', (req, res, next) => {
    let id = req.params.id
    db('dogs')
    .del()
    .where({ id })
    .returning('*')
    .then(deleted => {
      res.json(deleted)
    })
    .catch(err => {
      console.log(err);
    })
  })



module.exports = router;
