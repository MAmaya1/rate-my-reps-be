exports.up = function(knex) {
  return knex.schema
    .createTable('user_representatives', tbl => {
        tbl
            .integer('user_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('users')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
        tbl
            .integer('rep_id')
            .unsigned()
            .notNullable()
            .references('id')
            .inTable('representatives')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('user_representatives')
};
