import { Account } from './account'
import { User } from './user'

const Knex = require('knex')
const connection = require('../../knexfile')
const { Model } = require('objection')

const knexConnection = Knex(connection)
Model.knex(knexConnection)

module.exports = { Account, User }
