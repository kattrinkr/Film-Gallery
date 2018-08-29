import Films from '../models/filmModel'

async function getFilms(req, res) {
    const page = req.params.page ? req.params.page : 1;
    const limit = 4;
    let search = {};
    let sort = {};
    if (req.params.category) {     
        search.category = req.params.category;
    }
    if (req.params.rating) {
        sort.rating = -1;
    }
    if (req.params.film) {
        search.title = new RegExp( `^${req.params.film}((([A-Za-z]+)?(\\s)?)+)?$`);
    }
    try {
        const filmItems = await Films.find(search).sort(sort).limit(limit).skip(page*limit-limit);
        res.json(filmItems);
    } catch (err) {
        res.status(500).send(err);
    }
}

export {getFilms}