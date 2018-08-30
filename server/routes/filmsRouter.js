import express from 'express'

import {getFilms, getOneFilm} from '../controllers/controller'

const router = express.Router()

router.get('(/:category)?(/pages/:page)?(/sort/:rating)?(/film/:film)?', getFilms);
router.get('/definition/:id', getOneFilm);

export {router}

