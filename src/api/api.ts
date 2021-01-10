import express from 'express';
import { signin } from './database/db'
var bodyParser = require('body-parser')

console.log('hello')

export const api = express();
api.use(bodyParser.urlencoded({ extended: false }))

api.get('/', (req, res) => {
    res.json({
        "api":"working just fine"
    })
})

api.post('/signin', (req, res) => {
    console.log(req.body)
    signin(req.body)
    res.json({
        "signin":"You just queried signup"
    })
})