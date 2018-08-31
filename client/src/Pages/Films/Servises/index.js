import {categorySortUrl, ratingSortUrl,filmSearchUrl, infiniteScrollUrl} from './url'

async function categorySortFetch(event, context) {
    const url = categorySortUrl(event, context.state);
    const response = await fetch(url);
    const filmItems = await response.json();
    return {
        filmItems: filmItems,
        category: event.target.value,
        page: 2,
        bottom: 0
    }  
}

async function ratingSortFetch(context) {
    const result = ratingSortUrl(context.state);
    const response = await fetch(result.url);
    const filmItems = await response.json(); 
    return {
        filmItems: filmItems,
        sortByRating: result.sort,
        page: 2,
        bottom: 0
    } 
}

async function filmSearchFetch(event, context) {
    const search=`${event.target.value}`
    const url = filmSearchUrl(event, context.state);
    const response = await fetch(url);
    const filmItems = await response.json();
    return {
        filmItems: filmItems,
        page: 2,
        search: search,
        bottom: 0
    }
}

async function infiniteScrollFetch(context) {
    const LIMIT = 4;
    if (context.state.page < LIMIT) {
        let url = infiniteScrollUrl(context.state);
        if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && (window.scrollY > context.state.bottom)) {
            const response = await fetch(url);
            const filmItems = await response.json();
            let prevFilms = context.state.filmItems;
            let result = prevFilms.concat(filmItems);
            let categories = result.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
            categories.push('all');
                return {
                    filmItems: result,
                    categories: categories,
                    page: context.state.page + 1,
                    bottom: window.scrollY,
                }
        }
    }
}

export {categorySortFetch, ratingSortFetch, filmSearchFetch, infiniteScrollFetch}