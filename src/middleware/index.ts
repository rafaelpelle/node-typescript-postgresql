import { handleBodyRequestParsing, handleCompression } from './common'
import { handle404Error, handleClientError, handleServerError } from './error-handlers'

export default [
	handleBodyRequestParsing,
	handleCompression,
	handle404Error,
	handleClientError,
	handleServerError,
]
