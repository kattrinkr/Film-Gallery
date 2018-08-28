import express from 'express'

import {getFilms} from '../controllers/controller'

const router = express.Router()

router.get('(/:category)?(/pages/:page)?(/sort/:rating)?(/film/:film)?', getFilms);

export {router}

