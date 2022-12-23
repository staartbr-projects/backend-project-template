/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const hasTable = await knex.schema.hasTable('journeys_courses');

  if(!hasTable) {
    return knex.schema.createTable('journeys_courses', (table) => {
      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.uuid('journey_id').references('id').inTable('journeys');
      table.uuid('course_id').references('id').inTable('courses');
    });
  } else {
    return knex.schema.alterTable('journeys_courses', (table) => {
      table.dropColumns(['id', 'journey_id', 'course_id']);

      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.uuid('journey_id').references('id').inTable('journeys');
      table.uuid('course_id').references('id').inTable('courses');
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('journeys_courses');
};