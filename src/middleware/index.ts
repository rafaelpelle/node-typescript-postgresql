import { handleCors, handleBodyRequestParsing, handleCompression } from './common'
import { handle404Error, handleClientError, handleServerError } from './errorHandlers'
import { handleAPIDocs } from './apiDocs'

export default [
	handleCors,
	handleBodyRequestParsing,
	handleCompression,
	handle404Error,
	handleClientError,
	handleServerError,
	handleAPIDocs,
]
