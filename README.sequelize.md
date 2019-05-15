# Sequelize doc

## Launch migration

$ docker-compose exec api npx sequelize db:migrate(:undo) --config src/db/config/sequelize.js --migrations-path src/db/migrations/

## Manage seeds

$ docker-compose exec api npx sequelize db:seed:all --config src/db/config/sequelize.js --env test --seeders-path src/db/seeders/ --models-path src/models/

> Sequelize CLI [Node: 8.14.0, CLI: 5.4.0, ORM: 4.42.0]

> Loaded configuration file "src/db/config/sequelize.js".
Using environment "test".
== companies: migrating =======
== companies: migrated (0.012s)

$ docker-compose exec api npx sequelize db:seed(:undo):all --config src/db/config/sequelize.js --env test --seeders-path src/db/seeders/ --models-path src/models/

> Sequelize CLI [Node: 8.14.0, CLI: 5.4.0, ORM: 4.42.0]

> Loaded configuration file "src/db/config/sequelize.js".
Using environment "test".
== companies: reverting =======
== companies: reverted (0.007s)
