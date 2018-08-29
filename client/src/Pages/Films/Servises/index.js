function categorySortUrl(event, state) {
    let url;
    if (event.target.value !== 'all') {
        if (state.sortByRating) {
            if (state.search) {
                url = `/films-library/${event.target.value}/sort/rating/film/${state.search}`
            } else {
                url = `/films-library/${event.target.value}/sort/rating`
            }
        } else {
            if (state.search) {
                url = `/films-library/${event.target.value}/film/${state.search}`
            } else {
                url = `/films-library/${event.target.value}`
            }
        }
    } else {
        if (state.sortByRating) {
            if (state.search) {
                url = `/films-library/sort/rating/film/${state.search}`
            } else {
                url = `/films-library/sort/rating`
            }
        } else {
            if (state.search) {
                url = `/films-library/film/${state.search}`
            } else {
                url = `/films-library`
            }
        }
    }
    return url
}

function ratingSortUrl(state) {
    let url;
    let sort;
    if (state.category !== 'all') {
        if (!state.sortByRating) {
            if (state.search) {
                url = `/films-library/${state.category}/sort/rating/film/${state.search}`
            } else {
                url = `/films-library/${state.category}/sort/rating/`
            }
            sort = true;
        } else {
            if (state.search) {
                url = `/films-library/${state.category}film/${state.search}`
            } else {
                url = `/films-library/${state.category}`
            }
            sort = false
        }
    } else {
        if (!state.sortByRating) {
            if (state.search) {
                url = `/films-library/sort/rating/film/${state.search}`
            } else {
                url = `/films-library/sort/rating`
            }
            sort = true;
        } else {
            url = `/films-library`
            if (state.search) {
                url = `/films-library/film/${state.search}`
            } else {
                url = `/films-library/`
            }
            sort = false;
        }
    }
    return {
        url: url,
        sort: sort
    }
}

function filmSearchUrl(event, state) {
    let url;
    if (state.category !== 'all') {
        if (state.sortByRating) {
            if (event.target.value) {
                url = `/films-library/${state.category}/sort/rating/film/${event.target.value}`
            } else {
                url = `/films-library/${state.category}/sort/rating`
            }
        } else {
            if (event.target.value) {
                url = `/films-library/${state.category}/film/${event.target.value}`
            } else {
                url = `/films-library/${state.category}`
            }
        }
    } else {
        if (state.sortByRating) {
            if (event.target.value) {
                url = `/films-library/sort/rating/film/${event.target.value}`
            } else {
                url = `/films-library/sort/rating`
            }
        } else {
            if (event.target.value) {
                url = `/films-library/film/${event.target.value}`
            } else {
                url = `/films-library`
            }
        }
    }
    return url
}

function infiniteScrollUrl(state) {
    let url;
    if (state.category !== 'all') {
        if (state.sortByRating) {
            if (state.search) {
                url = `/films-library/${state.category}/pages/${state.page}/sort/rating/film/${state.search}`
            } else {
                url = `/films-library/${state.category}/pages/${state.page}/sort/rating`
            }
        } else {
            if (state.search) {
                url = `/films-library/${state.category}/pages/${state.page}/film/${state.search}`
            } else {
                url = `/films-library/${state.category}/pages/${state.page}/`
            }
        }
    } else {
        if (state.sortByRating) {
            if (state.search) {
                url = `/films-library/pages/${state.page}/sort/rating/film/${state.search}`
            } else {
                url = `/films-library/pages/${state.page}/sort/rating`
            }
        } else {
            if (state.search) {
                url = `/films-library/pages/${state.page}/film/${state.search}`
            } else {
                url = `/films-library/pages/${state.page}/`
            }
        }
    }
    return url
}

export {categorySortUrl, ratingSortUrl,filmSearchUrl, infiniteScrollUrl}