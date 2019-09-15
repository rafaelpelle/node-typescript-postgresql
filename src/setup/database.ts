import knex from 'knex'
const knexStringcase = require('knex-stringcase')
const { Model } = require('objection')
require('dotenv-safe').config()

const { DATABASE_URL, KNEX_DEBUG } = process.env

const pg = knex(
	knexStringcase({
		client: 'pg',
		connection: DATABASE_URL!,
		debug: KNEX_DEBUG === 'true',
	})
)

export async function setupDatabase(): Promise<void> {
	await pg.migrate.up()
	console.log('Migrations executed!')
	await pg.seed.run()
	console.log('Database populated!')
	Model.knex(pg)
}

export default pg
