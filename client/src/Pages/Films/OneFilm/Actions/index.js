function firstFilm (payload) {
    return {
        type: 'FIRST_FILM',
        ...payload
    }
}

function rating (payload) {
    return {
        type: 'RATING',
        ...payload
    }
}

function rememberNewComment (payload) {
    return {
        type: 'REMEMBER_COMMENT',
        ...payload
    }
}

function sendComment (payload) {
    return {
        type: 'SEND_COMMENT',
        ...payload
    }
}

export {firstFilm, rating, rememberNewComment, sendComment}