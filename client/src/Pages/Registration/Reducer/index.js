const initialState = {
    email: '', 
    message: '',
    name: ''
};

const reducer = (state = initialState, action) => {
    var result;
        switch (action.type) {
            case 'SET_DATA': 
                result = {
                    ...state,
                    name: action.name,
                    email: action.email, 
                    message: action.message 
                }
            break;
            default: 
                result = state
            break;
        } 
    return result;
}

export default reducer