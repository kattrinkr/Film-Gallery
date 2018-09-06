import Films from '../models/filmModel'

const wrapper = promise => (
    promise
      .then(film => ({ film, error: null }))
      .catch(error => ({ error, film: null }))
)

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
        search.title = new RegExp( `^${req.params.film}((([A-Za-z]+)?(\\s)?)+)?$`, 'i');
    }
    const { error, film } = await wrapper(Films.find(search).sort(sort).limit(limit).skip(page*limit-limit));
    if (!error) {
        res.json(film);
            return;
    } else {
         res.status(500).send(error)
    }
}

async function getOneFilm(req, res) {
    if (req.params.id) {  
        const { error, film } = await wrapper(Films.findById(req.params.id));
        if (!error) {
            res.json(film);
            return;
        } else {
            res.status(500).send(error)
        } 
    }
}

async function updateFilmRating(req, res) {
    if (req.params.id) {  
         const filmItem  = await Films.findById(req.params.id);
         const newRating = Math.round((+filmItem.rating + +req.body.rating) / 2);
         const { error, film } = await wrapper(Films.findOneAndUpdate({_id: req.params.id}, {rating: newRating}));
         if (!error) {
            res.json(film);
            return;
         } else {
            res.status(500).send(error)
         }
    }
}

async function addComment(req, res) {
    if (req.params.id) {   
        const { error, film } = await wrapper(Films.findOneAndUpdate({_id: req.params.id}, {$push: {comments: req.body.comment}}));
        if (!error) {
            res.json(film);
            return;
        } else {
            res.status(500).send(error)
        } 
    }
}

export {getFilms, getOneFilm, updateFilmRating, addComment}
