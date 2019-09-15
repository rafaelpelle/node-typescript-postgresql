import { Request, Response, NextFunction } from 'express'
import { HTTP400Error } from '../utils/httpErrors'
import { validateDate } from '../utils/valueValidators'

export const validateDateParams = (req: Request, res: Response, next: NextFunction) => {
	const { initialDate, endDate } = req.query
	if ((!initialDate && endDate) || (initialDate && !endDate)) {
		throw new HTTP400Error('Missing date parameter')
	} else if (initialDate && !validateDate(initialDate)) {
		throw new HTTP400Error('Invalid initialDate parameter')
	} else if (endDate && !validateDate(endDate)) {
		throw new HTTP400Error('Invalid endDate parameter')
	} else {
		// Either both initialDate and endDate are missing (no date restriction)
		// Or both are valid (date restricted)
		next()
	}
}
