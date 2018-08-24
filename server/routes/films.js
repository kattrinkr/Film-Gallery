import express from 'express'
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'

import {getFilms, registration, login} from '../controllers/filmController'
import {userValidator} from '../servises/filmsValidator'

const router = express.Router()
router.use(passport.initialize())
router.use(flash())
router.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'seeeecret',
    resave: false, 
    saveUninitialized: false
}))

router.get('(/:category)?(/pages/:page)?', getFilms);
router.post('/registration', userValidator, registration)
router.post('/login', userValidator, login)

export {router}

