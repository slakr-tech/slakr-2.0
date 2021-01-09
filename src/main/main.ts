import express from 'express';

export const index = express();

index.get('/', (req, res) => {
    res.send('hello world')
})
