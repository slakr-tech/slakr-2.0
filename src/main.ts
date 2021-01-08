import express from 'express';

const app = express();
const PORT = process.env.PORT || 3000

// middleware imports
import { index } from './index/index'
import { api } from './api/api'

// middleware use
app.use('/', index);
app.use('/api', api);

app.listen(PORT, () => {
    console.log(`SERVER IS LISTENING ON PORT ${ PORT }`)
})