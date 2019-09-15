const faker = require('faker')

exports.seed = function(knex) {
	if (process.env.NODE_ENV !== 'production') {
		return knex('books')
			.del()
			.then(function() {
				const books = []
				const numIterations = faker.random.number({ min: 50, max: 100 })
				for (let i = 0; i < numIterations; ++i) {
					books.push({
						id: faker.random.uuid(),
						title: faker.name.title(),
						isbn: faker.random.number({ min: 1000000000000, max: 9999999999999 }),
						author: faker.name.findName(),
						publisher: faker.name.findName(),
						year: faker.random.number({ min: 1500, max: new Date().getFullYear() }),
						language: faker.address.country(),
						weight: faker.random.number({ min: 20, max: 300 }),
						height: faker.random.number({ min: 20, max: 300 }),
						width: faker.random.number({ min: 20, max: 300 }),
						length: faker.random.number({ min: 20, max: 300 }),
					})
				}
				return knex('books').insert(books)
			})
	}
}
