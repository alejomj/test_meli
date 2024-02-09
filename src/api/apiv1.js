import express from 'express';

const routerV1 = express.Router();

routerV1.use((req, res, next) => {
    res.author = {
        name: 'Alejandro',
        lastname: 'Munoz'
    };
    next();
});

routerV1.get('/', async (req, res, next) => {
    const {q} = req.query;
    const r = await fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${q}&limit=4`);
    const resp = await r.json();
    const result = {
        author: res.author,
        categories: resp.available_filters[0].values,
        items: resp.results,
        _original: resp,
    };
    res.send(result);
});

routerV1.get('/:id', async (req, res, next) => {
    const {id} = req.params;
    const r = await fetch(`https://api.mercadolibre.com/items/${id}`);
    const resp = await r.json();
    const result = {
        author: res.author,
        item: resp,
        _original: resp,
    };
    res.send(result);
});

routerV1.get('/:id/description', async (req, res, next) => {
    const {id} = req.params;
    const r = await fetch(`https://api.mercadolibre.com/items/${id}/description`);
    const resp = await r.json();
    const result = {
        author: res.author,
        description: resp.plain_text,
        _original: resp,
    };
    res.send(result);
});

export default routerV1;