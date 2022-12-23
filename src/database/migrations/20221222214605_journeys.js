/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function (knex) {
  const hasTable = await knex.schema.hasTable('journeys');

  if (!hasTable) {
    return knex.schema.createTable('journeys', (table) => {
      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.string('title').notNullable();
      table.string('icon').notNullable();
      table.string('thumb').notNullable();
      table.string('description', 1000).nullable();
      table.string('slug').notNullable();
    });
  } else {
    return knex.schema.alterTable('journeys', (table) => {
      table.dropColumns([
        'id',
        'title',
        'icon',
        'thumb',
        'description',
        'slug'
      ]);

      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.string('title').notNullable();
      table.string('icon').notNullable();
      table.string('thumb').notNullable();
      table.string('description', 1000).nullable();
      table.string('slug').notNullable();
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {
  return knex.schema.dropTableIfExists('journeys');
};
