import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000

// colors import
const colors = require('colors/safe');

// MIDDLEWARE IMPORTS
const morgan = require('morgan');
import { main } from './main/main'
import { api } from './api/api'

// MIDDLEWARE USE
app.use(morgan(`${colors.red(':method')} ${colors.blue(':url')} :status :res[content-length] - :response-time ms`));
app.use('/', main);
app.use('/api', api);


app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT ${ PORT }`)
})