exports.up = function(knex) {
  return knex.schema
    .createTable('representatives', tbl => {
        tbl.increments('rep_id');
        tbl
            .string('name', 128)
            .unique()
            .notNullable();
        tbl
            .string('office', 128)
            .notNullable();
        tbl
            .string('division')
            .notNullable();
        tbl.string('party', 255);
        tbl.string('photo_url');
        tbl.string('address', 128);
        tbl.string('city');
        tbl.string('state');
        tbl.string('zip_code');
        tbl.string('phone_number');
        tbl.string('website', 500);
        tbl.string('facebook', 500);
        tbl.string('twitter', 500);
        tbl.string('youtube', 500);
        tbl.integer('upvotes');
        tbl.integer('downvotes');
    })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('representatives')
};
