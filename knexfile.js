//I only want migrations, rollbacks, and seeds to run when the NODE_ENV is specified
//in the knex seed/migrate command. Knex will error out if it is not specified.
if (!process.env.NODE_ENV) { throw new Error('NODE_ENV not set') }

require('dotenv').config();

module.exports = {
    testing: {
        client: 'pg',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE + '_testing',
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci'
        }
    },
    development: {
        client: 'pg',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE,
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci'

        }
    },
    production: {
        client: 'pg',
        debug: false,
        connection: {
            host: process.env.DB_HOST,
            port: process.env.DB_PORT,
            user: process.env.DB_USER,
            password: process.env.DB_PASSWORD,
            database: process.env.DB_DATABASE + '_production',
            charset: 'utf8mb4',
            collate: 'utf8mb4_unicode_ci'
        }
    }
}
