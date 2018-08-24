import {REG, MIN_VALUE_FOR_PASSWORD, ERRORS} from '../Constants'

function emailValidator (EMAIL) {
    var result;
    if (!EMAIL) {
        result = ERRORS.email.empty
    } else if (EMAIL.indexOf('@') === -1){
        result = ERRORS.email.at
    } else if (EMAIL.indexOf('.') === -1) {
        result = ERRORS.email.dot
    } else if (REG.test(EMAIL)) {
        result = null
    } else {
        result = ERRORS.email.form
    }
    return result;
}

function passwordValidator(PASSWORD) {
    var result;
    if (!PASSWORD) {
        result = ERRORS.password.empty
    } else if (PASSWORD.length < MIN_VALUE_FOR_PASSWORD){
        result = ERRORS.password.symbols
    } else if (PASSWORD.length >= MIN_VALUE_FOR_PASSWORD) {
        result = null
    } 
    return result;
}

export {emailValidator, passwordValidator}