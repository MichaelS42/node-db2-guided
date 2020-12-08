
exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    // id: primary key, unique, not null (integers that auto-increment)
    table.increments();
    // name: unique, not null
    table.text('name', 128).unique().notNullable();
    // avgWeightOZ: not null
    table.decimal('avgWeightOZ');
    // delicious: boolean
    table.boolean('delicious');
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('fruits');
};
