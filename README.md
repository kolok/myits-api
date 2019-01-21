# MyITS API

Here will be developed the RestFul API for MyITS

# Launch the docker development environment

> docker-compose up -d

This will launch the docker environment for the APIs and run the API with nodemon which will handle any code update in live.
This is configured in the docker-compose file "docker-compose.api.yml":

  command: npm run watch

And in the "package.json"

  "scripts": {
    "watch": "NODE_ENV=development nodemon app.js --exec",
    ...
  },

Display the logs of all dockers

> docker-compose logs -f

# Test the API

The route path should return a 200 code

> curl 'http://localhost:4000'

you can get list of element calling :

>  curl 'http://localhost:4000/api/v1/companies'

Before launch test if the testing database doesn't exist, you should create it, let's use the following command :

> docker exec -i myits-db psql -p 5432 -h 127.0.0.1 -U myits-user < db-files/myits.testing.db.sql

This command will drop and create the testing database, others steps will be handle in the tests by the migrations and the seeds process.

Run tests :

> docker exec myits-api npm run test

# Useful links

KNEX (DB connector and manager): https://knexjs.org/
JOI (model validator): https://github.com/hapijs/joi/blob/v14.3.0/API.md
