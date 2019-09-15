import http from 'http'
import express from 'express'
import cors from 'cors'
import { applyMiddleware, applyRoutes } from './utils'
import middleware from './middleware'
import routes from './services'
import { setupDatabase } from './setup/database'

process.on('uncaughtException', (e) => {
	console.log(e)
	process.exit(1)
})

process.on('unhandledRejection', (e) => {
	console.log(e)
	process.exit(1)
})

setupDatabase().then(() => {
	const router = express()

	router.use(
		cors({
			credentials: true,
			origin: true,
		})
	)

	applyRoutes(routes, router)
	applyMiddleware(middleware, router)

	const { PORT = 3000 } = process.env
	http.createServer(router).listen(PORT, () => {
		console.log(`Server running on port ${PORT}...`)
	})
})
