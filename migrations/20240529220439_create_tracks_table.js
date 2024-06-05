/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {
  return knex.schema
    .createTable("prixs", (table) => {
      table.increments("id").primary();
      table.string("name").notNullable();
      table.string("icon").notNullable();
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    })
    .createTable("tracks", (table) => {
      table.increments("id").primary();
      table.integer("prix_id").unsigned().notNullable();
      table.string("name").notNullable();
      table.string("img").notNullable();
      table
        .foreign("prix_id")
        .references("id")
        .inTable("prixs")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      table.timestamp("created_at").defaultTo(knex.fn.now());
      table
        .timestamp("updated_at")
        .defaultTo(knex.raw("CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"));
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTable("tracks");
};
