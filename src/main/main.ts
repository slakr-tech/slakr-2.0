import express from 'express';
import morgan from 'morgan';

export const index = express();

index.get('/', (req, res) => {
    res.send('hello world')
})
