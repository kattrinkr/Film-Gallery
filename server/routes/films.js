import express from 'express'
import passport from 'passport'
import session from 'express-session'

import {getFilms, registration, logIn} from '../controllers/filmController'
import {userValidator} from '../servises/filmsValidator'
var flash = require('connect-flash');
const router = express.Router();
router.use(passport.initialize());
router.use(flash());

router.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'woot',
    resave: false, 
    saveUninitialized: false
}))

router.get('(/:category)?(/pages/:page)?', getFilms);
router.post('/registration', userValidator, passport.authenticate('local-signup', {
    successRedirect : '/profile', 
    failureRedirect : '/signup',
    failureFlash : true 
}))
router.post('/login', userValidator, passport.authenticate('local-login', {
    successRedirect : '/profile', 
    failureRedirect : '/login', 
    failureFlash : true 
}))

export {router}

