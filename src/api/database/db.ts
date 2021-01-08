const mongojs = require('mongojs');

const db = mongojs(process.env['chatreMongoConnectionUri'])

export const users = db.collection('users')
