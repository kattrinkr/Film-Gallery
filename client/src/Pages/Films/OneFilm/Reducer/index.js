const initialState = {
    film: {},
    filmComments: [],
    id: '',
    name: '',
    isRatingPut: false,
    ratings: [],
    isCommentPut: false,
    newComment: ''
};

const reducer = (state = initialState, action) => {
    let result;
    switch (action.type) {
        case 'FIRST_FILM': 
            result = {
                ...state,
                id: action.id,
                name: action.name,
                film: action.film,
                filmComments: action.film.comments,                
                isRatingPut: action.isRatingPut,
                isCommentPut: action.isCommentPut
            }
            break;
        case 'RATING': 
            result = {
                ...state,
                isRatingPut: action.isRatingPut
            }
            break;
        case 'REMEMBER_COMMENT':
            result = {
                ...state,
                newComment: action.newComment
            }
            break;
        case 'SEND_COMMENT':
            result = {  
                ...state,
                isCommentPut:  action.isCommentPut,
                newComment: action.newComment
            }
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