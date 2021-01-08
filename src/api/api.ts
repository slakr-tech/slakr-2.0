import express from 'express';
import './database/db'

console.log('hello')

export const api = express();

api.get('/', (req, res) => {
    res.json({
        "api":"working just fine"
    })
})