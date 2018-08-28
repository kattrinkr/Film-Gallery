import express from 'express'
import passport from 'passport'
import session from 'express-session'
import flash from 'connect-flash'

import {userValidator, registration, login} from '../servises/userValidator'

const router = express.Router()
router.use(passport.initialize())
router.use(flash())
router.use(session({ cookie: { maxAge: 60000 }, 
    secret: 'seeeecret',
    resave: false, 
    saveUninitialized: false
}))

router.post('/registration', userValidator, registration)
router.post('/login', userValidator, login)

export {router}