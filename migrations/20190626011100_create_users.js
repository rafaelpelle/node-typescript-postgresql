exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('users', (table) => {
			table.increments('id').primary()
			table.string('cpf').unique()
			table.string('name')
			table.string('email')
			table.string('gender')
			table.date('birth_date')
		}),
	])
}

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('users')
	])
}
