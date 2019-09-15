import { Router } from 'express'
import parser from 'body-parser'
import compression from 'compression'

export const handleBodyRequestParsing = (router: Router) => {
	router.use(parser.urlencoded({ extended: true }))
	router.use(parser.json())
}

export const handleCompression = (router: Router) => {
	router.use(compression())
}
