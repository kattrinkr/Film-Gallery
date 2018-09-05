import {REG, MIN_VALUE_FOR_PASSWORD, ERRORS} from '../constants/constant'
import passport from 'passport'

function userValidator (req, res, next) {
    let errors = {};
    if (!req.body.email) {
        errors.email = ERRORS.email.empty
    } else if (req.body.email.indexOf('@') === -1) {
        errors.email = ERRORS.email.at
    } else if (req.body.email.indexOf('.') === -1) {
        errors.email = ERRORS.email.dot
    } else if (!REG.test(req.body.email)) {
        errors.email = ERRORS.email.isNotCorrect
    }
    if (!req.body.password) {
        errors.password = ERRORS.password.empty
    } else if (req.body.password.length < MIN_VALUE_FOR_PASSWORD) {
        errors.password = ERRORS.password.length
    } 
    if (Object.keys(errors).length !== 0) {
        res.json(errors);
    } else {
        next()
    }
}

async function registration(req, res, next) {
    await passport.authenticate('local-signup', function(err, user, info) {
        let result;
        if (err) { 
            result =  next(err) 
        } else if (!user) { 
            result = res.json({
                message: info.message
            })
        } else {
            result = res.json({
                message: info.message
            })
        }
        return result;
    })(req, res, next)
}

async function login(req, res, next) {
    await passport.authenticate('local-login', function(err, user, info) {
        let result;
        if (err) { 
            result = next(err) 
        } else if (!user) {
            result = res.json({
                message: info.message
            })
        } else {
            result = res.json({
                name: info.name,
                message: info.message
            })
        }
        return result;
    })(req, res, next)
}

async function logout(req, res) {
    await req.session.destroy();
    res.send();
}

export {userValidator, registration, login, logout}
