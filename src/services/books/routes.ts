import { validateDateParams } from '../../middleware/validators'
import { getBooks } from './controllers'

export default [
	{
		path: '/books',
		method: 'get',
		handler: [validateDateParams, getBooks],
	},
]
