'use strict';

exports.seed = function(knex) {
  return knex('owners').del()
    .then(() => {
      return knex('owners').insert([{
        id: 1,
        first_name: 'Elizabeth',
        last_name: 'Windsor',
        address_line_1: '6630 High Point Dr SW',
        address_line_2:'',
        city:'Seattle',
        state:'WA',
        zip: 98126,
        phone_number:555446666,
        email_address:'thequeen@hotmail.com',
        user_id: 1,
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }, {
        id: 2,
        first_name: 'Ceasar',
        last_name: 'Milan',
        address_line_1: '#105',
        address_line_2:'3022 SW Bradford St',
        city:'Seattle',
        state:'WA',
        zip: 98126,
        phone_number:658466677,
        email_address:'thedogwhisperer@aol.com',
        user_id: '2',
        created_at: new Date('2016-06-29 14:26:16 UTC'),
        updated_at: new Date('2016-06-29 14:26:16 UTC')
      }
    ]);
    })
    .then(() => {
      return knex.raw(
        "SELECT setval('owners_id_seq', (SELECT MAX(id) FROM owners));"
      );
    });
};
