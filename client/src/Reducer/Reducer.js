import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import registrationReducer from '../Pages/Registration/Reducer'
import loginReducer from '../Pages/Login/Reducer'
import filmsReducer from '../Pages/Films/Reducer'
import oneFilmReducer from '../Pages/OneFilm/Reducer'

const reducers = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    films: filmsReducer,
    oneFilm: oneFilmReducer,
    form: formReducer
})

const store = createStore(reducers);

export {store}