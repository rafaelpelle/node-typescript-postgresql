exports.up = function(knex) {
	return Promise.all([
		knex.schema.createTable('books', (table) => {
			table.uuid('id').primary()
			table.string('title')
			table.string('isbn')
			table.string('author')
			table.string('publisher')
			table.string('year')
			table.string('language')
			table.integer('weight')
			table.integer('height')
			table.integer('width')
			table.integer('length')
		}),
	])
}

exports.down = function(knex) {
	return Promise.all([knex.schema.dropTable('books')])
}
