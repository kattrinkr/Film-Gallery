import express from 'express'

import {getFilms, getOneFilm, updateFilmRating, addComment} from '../controllers/controller'

const router = express.Router()

router.get('(/:category)?(/pages/:page)?(/sort/:rating)?(/film/:film)?', getFilms);
router.get('/definition/:id', getOneFilm);

router.post('/rating/:id', updateFilmRating);
router.post('/comment/:id', addComment);

export {router}

