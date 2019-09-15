const { Model } = require('objection')

export class Book extends Model {
	static get tableName() {
		return 'books'
	}
}
