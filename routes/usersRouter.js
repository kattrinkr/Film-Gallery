import express from 'express'
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'
var mongoose = require('mongoose');
var MongoStore = require('connect-mongo')(session);
import {userValidator, registration, login, logout} from '../servises/user'

const router = express.Router()
router.use(flash())
router.use(session({
    secret: 'seeeecret', 
    resave: true,
    cookie: { maxAge: 60*60*1000 },
    saveUninitialized: true,
    store: new MongoStore({ mongooseConnection: mongoose.connection })
}))
router.use(passport.initialize());
router.use(passport.session());

router.post('/registration', userValidator, registration)
router.post('/login', userValidator, login)
router.post('/logout', logout)

export {router}