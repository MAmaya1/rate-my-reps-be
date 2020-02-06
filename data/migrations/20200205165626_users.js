exports.up = function(knex) {
  return knex.schema
    .createTable('users', tbl => {
        tbl.increments();
        tbl.string('address');
        tbl.string('email')
    })
};

exports.down = function(knex) {
  knex.schema
    .dropTableIfExists('users')
};
