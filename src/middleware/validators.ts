import { Request, Response, NextFunction } from 'express'
import { HTTP400Error } from '../utils/httpErrors'
import { validateCPF } from '../utils/valueValidators'

export const validateUserParams = (req: Request, res: Response, next: NextFunction) => {
	if (!req.query.cpf) {
		throw new HTTP400Error('Missing CPF parameter')
	} else if (!validateCPF(req.query.cpf)) {
		throw new HTTP400Error('Invalid CPF parameter')
	} else {
		next()
	}
}
