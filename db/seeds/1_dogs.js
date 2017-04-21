exports.seed = function (knex) {
  return knex('dogs').del()
  .then(() => {
    return knex('dogs').insert([{
      id:1,
      owner_id:1,
      first_name: 'Prince Ruffington' ,
      last_name: 'Windsor',
      breed: 'corgi',
      size: 'medium',
      allergies: true,
      kids: false,
      other_dogs: false,
      other_people: true,
      fav_treat: 'snasauges',
      bio: 'Lord of the manor that loves long walks and chasing squirrels.  Is allergic to chicken and prefers duck treats and playing with kids',
      image: 'http://www.critterfiles.com/wp-content/uploads/2016/02/queencorgi-1.jpg',
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
    }, {
      id:2,
      owner_id:2,
      first_name: 'Paul',
      last_name: 'Milan',
      breed: 'pit bull',
      size: 'large',
      allergies: true,
      kids: true,
      other_dogs: true,
      other_people: true,
      fav_treat: 'snasauges',
      bio: 'Extremely disciplines, sits, rolls, and plays dead on command.  Prefers to be a solo dog, and is not found of kids or other dogs',
      image: 'http://media.nbcsandiego.com/images/1200*675/466171182-cesar-millan.jpg?ak=bc',
      created_at: new Date('2016-06-29 14:26:16 UTC'),
      updated_at: new Date('2016-06-29 14:26:16 UTC')
  }]);
  })
  .then(() => {
    return knex.raw(
      "SELECT setval('dogs_id_seq', (SELECT MAX(id) FROM dogs));"
    );
  });
};
