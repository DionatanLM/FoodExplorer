exports.up = (knex) =>
  knex.schema.createTable("dishes", (table) => {
    table.increments("id");
    table.string("title");
    table.string("description");
    table.integer("category_id").references("id").inTable("categories");
    table.string("price");
    table.varchar("image");
  });

exports.down = (knex) => knex.schema.dropTable("dishes");
