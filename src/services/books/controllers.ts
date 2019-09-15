import { Request, Response, NextFunction } from 'express'
import { Book } from '../../models/book'

export const getBooks = async (req: Request, res: Response, next: NextFunction) => {
	const { initialDate, endDate, searchTerm } = req.query
	const page = req.query.page || 0
	const limit = 10
	const offset = page * limit
	let queryResponse

	if (searchTerm) {
		queryResponse =
			!initialDate && !endDate
				? await getBooksWithTerm(limit, offset, searchTerm)
				: await getBooksWithTermAndDate(limit, offset, initialDate, endDate, searchTerm)
	} else {
		queryResponse =
			!initialDate && !endDate
				? await getBooksAll(limit, offset)
				: await getBooksWithDate(limit, offset, initialDate, endDate)
	}

	res.status(200).send({
		ok: true,
		totalBooks: Number(queryResponse.totalBooks.count),
		books: queryResponse.books,
	})
}

const getBooksAll = async (limit: number, offset: number) => {
	const books = await Book.query()
		.limit(limit)
		.offset(offset)
	const totalBooks = await Book.query()
		.count('id')
		.first()

	return { books, totalBooks }
}

const getBooksWithTerm = async (limit: number, offset: number, searchTerm: string) => {
	const subquery = Book.query()
		.orWhere('title', 'like', `%${searchTerm}%`)
		.orWhere('author', 'like', `%${searchTerm}%`)
		.orWhere('isbn', 'like', `%${searchTerm}%`)
		.select('id')
	const books = await Book.query()
		.where('id', 'in', subquery)
		.limit(limit)
		.offset(offset)
	const totalBooks = await Book.query()
		.where('id', 'in', subquery)
		.count('id')
		.first()

	return { books, totalBooks }
}

const getBooksWithDate = async (limit: number, offset: number, init: string, end: string) => {
	const books = await Book.query()
		.whereBetween('year', [init, end])
		.limit(limit)
		.offset(offset)
	const totalBooks = await Book.query()
		.whereBetween('year', [init, end])
		.count('id')
		.first()

	return { books, totalBooks }
}

const getBooksWithTermAndDate = async (
	limit: number,
	offset: number,
	init: string,
	end: string,
	searchTerm: string
) => {
	const subquery = Book.query()
		.orWhere('title', 'like', `%${searchTerm}%`)
		.orWhere('author', 'like', `%${searchTerm}%`)
		.orWhere('isbn', 'like', `%${searchTerm}%`)
		.select('id')
	const books = await Book.query()
		.limit(limit)
		.offset(offset)
		.whereBetween('year', [init, end])
		.andWhere('id', 'in', subquery)
	const totalBooks = await Book.query()
		.whereBetween('year', [init, end])
		.andWhere('id', 'in', subquery)
		.count('id')
		.first()

	return { books, totalBooks }
}
