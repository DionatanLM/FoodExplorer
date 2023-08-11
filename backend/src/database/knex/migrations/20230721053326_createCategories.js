exports.up = (knex) =>
  knex.schema.createTable("categories", (table) => {
    table.increments("id");
    table.string("name");
  });
exports.down = (knex) => knex.schema.dropTable("categories");
