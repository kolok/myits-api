//I only want migrations, rollbacks, and seeds to run when the NODE_ENV is specified
//in the knex seed/migrate command. Knex will error out if it is not specified.
if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV not set')
}

exports.up = function(knex, Promise) {
  return knex.schema.createTable('companies', function(table) {
      table.increments('id').primary()
      table.string('name').notNullable()
      table.string('status').defaultTo('active').notNullable()
      table.dateTime('created_at')
          .notNullable()
          .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
      table.dateTime('updated_at')
      table.dateTime('deleted_at')
  })
};

exports.down = function(knex, Promise) {
//We never want to drop tables in production
  if (process.env.NODE_ENV !== 'production') {
    return knex.schema.dropTableIfExists('companies')
  }
};
