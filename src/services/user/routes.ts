import { validateUserParams } from '../../middleware/validators'
import { getUserByCPF, getAllUsers } from './controllers'

export default [
	{
		path: '/allUsers',
		method: 'get',
		handler: [getAllUsers],
	},
	{
		path: '/user',
		method: 'get',
		handler: [validateUserParams, getUserByCPF],
	},
]
