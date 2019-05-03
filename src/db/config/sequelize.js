'use strict';

require('dotenv').config();

module.exports = {
  "development": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE,
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "port": process.env.DB_PORT,
    "pool": { "max": 5, "min": 0, "idle": 10000 },
    "define": { "freezeTableName": true, "timestamps": false },
    "logging": false
  },
  "test": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE + "_test",
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "port": process.env.DB_PORT,
    "pool": { "max": 5, "min": 0, "idle": 10000 },
    "define": { "freezeTableName": true, "timestamps": false },
    "logging": false
  },
  "production": {
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_DATABASE + "_production",
    "host": process.env.DB_HOST,
    "dialect": "postgres",
    "port": process.env.DB_PORT,
    "pool": { "max": 5, "min": 0, "idle": 10000 },
    "define": { "freezeTableName": true, "timestamps": false },
    "logging": false
  }
};
