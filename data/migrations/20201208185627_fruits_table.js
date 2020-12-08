
exports.up = function(knex) {
  return knex.schema.createTable('fruits', table => {
    // id: primary key, unique, not null, integers that auto-increment
    table.increments();
  });
};

exports.down = function(knex) {
  
};
