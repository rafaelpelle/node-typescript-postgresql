import { Request, Response, NextFunction } from 'express'
const { User } = require('../../models/schema')


export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
	// select * from "users";
	const users = await User.query()
	res.status(200).send({
		ok: true,
		users,
	})
}

export const getUserByCPF = async ({ query }: Request, res: Response) => {
	// SELECT user from database where cpf=...
	// const result = await getUserByCPF(query.cpf)
	const user = await User.query().where('cpf', query.cpf)
	res.status(200).send({
		ok: true,
		user,
	})
}
