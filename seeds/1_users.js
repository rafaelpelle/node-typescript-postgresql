exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del()
		.then(function() {
			// Inserts seed entries
			return knex('users').insert([
				{
					cpf: '08194709962',
					name: 'Rafael Pelle',
					email: 'rafapelle@gmail.com',
					gender: 'male',
					birth_date: '1992-10-23',
				},
				{
					cpf: '62206664968',
					name: 'Ana Maria Serafim',
					email: 'anamaria.serafim@gmail.com',
					gender: 'female',
					birth_date: '1969-11-19',
				},
			])
		})
}
