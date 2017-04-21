exports.up = (knex) => {
return knex.schema.createTable('dogs', table => {
  table.increments()
  table.integer('owner_id').notNullable();
  table.varchar('first_name', 60).notNullable();
  table.varchar('last_name', 60);
  table.varchar('breed', 255).notNullable();
  table.varchar('size', 255).notNullable();
  table.boolean('allergies').defaultTo(false);
  table.boolean('kids').defaultTo(false);
  table.boolean('other_dogs').defaultTo(false);
  table.boolean('other_people').defaultTo(false);
  table.varchar('fav_treat', 60);
  table.varchar('bio', 255).notNullable();
  table.string('image');
  table.timestamps(true, true);
  })
}

exports.down = (knex) => {
 return knex.schema.dropTable('dogs')
}
