import { Request, Response, NextFunction } from 'express'

export const getAllUsers = async (req: Request, res: Response, next: NextFunction) => {
	// SELECT all users from database...
	// const result = await getAllUsers()
	const result = [
		{ name: 'Rafael', CPF: '08194709962' },
		{ name: 'Pelle', CPF: '08194709961' },
	]
	res.status(200).send(result)
}

export const getUserByCPF = async ({ query }: Request, res: Response) => {
	// SELECT user from database where cpf=...
	// const result = await getUserByCPF(query.CPF)
	const result = { name: 'Rafael', CPF: '08194709962' }
	res.status(200).send(result)
}
