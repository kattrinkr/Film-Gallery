const initialState = {
    filmItems: [], 
    categories: [], 
    category: 'all', 
    sortByRating: false,
    page: 2,
    bottom: 0,
    search: '',
    name: ''
};

const reducer = (state = initialState, action) => {
    let result;
    switch (action.type) {
        case 'FIRST_FILMS': 
            result = {
                ...state,
                name: action.name,
                filmItems: action.filmItems, 
                categories: action.categories,
                sortByRating: action.sortByRating,
                bottom: action.bottom 
            }
            break;
        case 'CATEGORY_SORT': 
            result = {
                ...state,
                filmItems: action.filmItems,
                category: action.category,
                page: 2,
                bottom: 0 
            }
            break;
        case 'RATING_SORT':
            result = {
                ...state,
                filmItems: action.filmItems,
                sortByRating: action.sortByRating,
                page: 2,
                bottom: 0 
            }
            break;
        case 'FILM_SEARCH': 
            result = {  
                ...state,
                filmItems: action.filmItems,
                search: action.search,
                page: 2,
                bottom: 0 
            }
            break; 
        case 'INFINITE_SCROLL': 
        if(action.filmItems){
            result = {
                ...state,
                filmItems: action.filmItems,
                categories: action.categories,
                page: action.page,
                bottom: action.bottom, 
            }
        } else result = {...state}
            break;
        default: 
            result = {
                ...state
            }
            break;
    } 
    return result; 
}

export default reducer