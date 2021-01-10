import express from 'express';
import { signin } from './database/db'
const bodyParser = require('body-parser')

export const api = express();
api.use(bodyParser.urlencoded({ extended: false }))

api.get('/', (req, res) => {
    res.json({
        "api":"working just fine"
    })
})

api.post('/signin', (req, res) => {
    signin(req.body)
    res.json({
        "signin":"You just queried signin"
    })
})