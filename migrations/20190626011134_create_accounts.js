exports.up = function(knex, Promise) {
	return Promise.all([
		knex.schema.createTable('accounts', (table) => {
			table.increments('id').primary()
			table.string('type')
			table.string('currency')
			table.string('description')
			table.float('initial_value')
			table.float('current_value')
			table.integer('user_id').references('users.id')
		}),
	])
}

exports.down = function(knex, Promise) {
	return Promise.all([
		knex.schema.dropTable('accounts')
	])
}
