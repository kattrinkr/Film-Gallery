function firstFilms (payload) {
    return {
        type: 'FIRST_FILMS',
        ...payload
    }
}

function categorySort (payload) {
    return {
        type: 'CATEGORY_SORT',
        ...payload
    }
}

function ratingSort (payload) {
    return {
        type: 'RATING_SORT',
        ...payload
    }
}

function filmSearch (payload) {
    return {
        type: 'FILM_SEARCH',
        ...payload
    }
}

function infiniteScroll (payload) {
    return {
        type: 'INFINITE_SCROLL',
        ...payload
    }
}

export {firstFilms, categorySort, ratingSort, filmSearch, infiniteScroll}