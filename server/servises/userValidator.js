import {REG, MIN_VALUE_FOR_PASSWORD, ERRORS} from '../constants/constant'

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
};

export {userValidator}