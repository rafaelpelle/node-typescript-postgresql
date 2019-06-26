const { Model } = require('objection')
import { User } from './user'

export class Account extends Model {
static get tableName () {
		return 'accounts'
	}

static get relationMappings () {
		return {
			users: {
				relation: Model.BelongsToOneRelation,
				modelClass: User,
				join: {
					from: 'accounts.user_id',
					to: 'users.id'
				}
			}
		}
	}
}
