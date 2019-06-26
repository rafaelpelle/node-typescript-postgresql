require('dotenv').config()
const { DATABASE_URL } = process.env

const pg = require('pg')
pg.defaults.ssl = false

module.exports = {
  client: 'pg',
  connection: DATABASE_URL
}
