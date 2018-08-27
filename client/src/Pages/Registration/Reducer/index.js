const initialState = {
    email: '',
    password: '', 
    message: ''
};

const reducer = (state = initialState, action) => {
    var result;
        switch (action.type) {
            case 'SET_DATA': 
                result = {
                    ...state,
                    name: action.name,
                    email: action.email,
                    password: action.password, 
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