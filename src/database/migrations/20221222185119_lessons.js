/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const hasTable = await knex.schema.hasTable('lessons');
  if(!hasTable) {
    return knex.schema.createTable('lessons', (table) => {
      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.uuid('course_id').references('id').inTable('courses');
      table.string('title', 255).notNullable();
      table.string('description', 1000).nullable();
    });
  } else {
    return knex.schema.alterTable('lessons', (table) => {
      table.dropColumns(['id', 'course_id', 'title', 'description']);

      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.uuid('course_id').references('id').inTable('courses');
      table.string('title', 255).notNullable();
      table.string('description', 1000).nullable();
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('lessons');
};
