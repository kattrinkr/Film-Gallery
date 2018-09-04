import {categorySortUrl, ratingSortUrl,filmSearchUrl, infiniteScrollUrl} from './url'

async function categorySortFetch(event, context) {
    const url = categorySortUrl(event, context);
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
    const result = ratingSortUrl(context);
    const response = await fetch(result.url);
    const filmItems = await response.json(); 
    return {
        filmItems: filmItems,
        sortByRating: result.sort,
        page: 2,
        bottom: 0
    } 
}

async function filmSearchFetch(search, context) {
    const url = filmSearchUrl(search, context);
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
    if (context.page < LIMIT) {
        let url = infiniteScrollUrl(context);
        if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && (window.scrollY > context.bottom)) {
            const response = await fetch(url);
            const filmItems = await response.json();
            let prevFilms = context.filmItems;
            let result = prevFilms.concat(filmItems);
            let categories = result.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
            categories.push('all');
                return {
                    filmItems: result,
                    categories: categories,
                    page: context.page + 1,
                    bottom: window.scrollY,
                }
        } 
    } 
}

export {categorySortFetch, ratingSortFetch, filmSearchFetch, infiniteScrollFetch}