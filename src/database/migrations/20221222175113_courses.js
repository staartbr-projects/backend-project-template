/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = async function(knex) {
  const hasTable = await knex.schema.hasTable('courses');

  if(!hasTable) {
    return knex.schema.createTable('courses', (table) => {
      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.string('thumb').notNullable();
      table.string('description', 1000).nullable();
      table.string('instructor').notNullable();
      table.string('level').notNullable();
      table.string('title').notNullable();
      table.string('slug').notNullable();
    });
  } else {
    return knex.schema.alterTable('courses', (table) => {
      table.dropColumns([
        'id', 
        'thumb', 
        'description', 
        'instructor', 
        'level', 
        'title', 
        'slug'
      ]);

      table.uuid('id').defaultTo(knex.raw('(UUID())')).unique().primary();
      table.string('thumb').notNullable();
      table.string('description').nullable();
      table.string('instructor').notNullable();
      table.string('level').notNullable();
      table.string('title').notNullable();
      table.string('slug').notNullable();
    });
  }
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema.dropTableIfExists('courses');
};
