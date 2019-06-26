exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('accounts').del()
		.then(function() {
			// Inserts seed entries
			return knex('accounts').insert([
				{
					user_id: '1',
					type: 'Credit Card',
					currency: 'BRL',
					description: 'Nubank',
					initial_value: 0,
					current_value: 0,
				},
				{
					user_id: '2',
					type: 'Bank Account',
					currency: 'BRL',
					description: 'Nuconta',
					initial_value: 0,
					current_value: 0,
				},
			])
		})
}
