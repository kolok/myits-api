//I only want migrations, rollbacks, and seeds to run when the NODE_ENV is specified
//in the knex seed/migrate command. Knex will error out if it is not specified.
if (!process.env.NODE_ENV) {
    throw new Error('NODE_ENV not set')
}

//We don't want seeds to run in production
if (process.env.NODE_ENV === 'production') {
    throw new Error("Can't run seeds in production")
}
const seed = async function(knex, Promise) {
    // Deletes ALL existing entries
    await knex('companies').truncate()

    // Inserts seed entries
    await knex('companies').insert([
      {id: 1, name: 'Company 1'},
      {id: 2, name: 'Company 2'},
      {id: 3, name: 'Company 3'}
    ]);

    await knex.raw('select setval(\'companies_id_seq\', max(id)) from companies');
};

exports.seed = seed;
