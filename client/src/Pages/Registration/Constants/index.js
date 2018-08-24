const REG = /^(\S+)@([a-z0-9-]+)(\.)([a-z]{2,4})(\.?)([a-z]{0,4})+$/;
const MIN_VALUE_FOR_PASSWORD = 6;
const ERRORS = {
    email: {
        empty: 'Empty field',
        at: 'Email should has @',
        dot: 'Email should has . in domain',
        form: 'Email should be in such form: local-part@domain'
    },
    password: {
        empty: 'Empty field',
        symbols: 'Password should consist of 6 or more symbols'
    }
}

export {REG, MIN_VALUE_FOR_PASSWORD, ERRORS}