import express from 'express';
import { users } from './database/db'

console.log(users)

export const api = express();
users.find().sort({name: 1}, function (err:any, docs:any) {
    console.log(docs)
})

api.get('/', (req, res) => {
    res.json({
        "api":"working just fine"
    })
})