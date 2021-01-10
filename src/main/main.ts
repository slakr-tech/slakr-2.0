import express from 'express';
import nunjucks from 'nunjucks';

export const main = express();

nunjucks.configure('views', {
    autoescape:  true,
    express:  main
})

main.get('/', (req, res) => {
    res.send(nunjucks.render('index.njk'))
})
