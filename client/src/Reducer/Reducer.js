import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'
import persist from 'redux-persist-to-localstorage'

import registrationReducer from '../Pages/Registration/Reducer'
import loginReducer from '../Pages/Login/Reducer'
import filmsReducer from '../Pages/Films/Reducer'
import oneFilmReducer from '../Pages//Films/OneFilm/Reducer'

const reducers = combineReducers({
    registration: registrationReducer,
    login: loginReducer,
    films: filmsReducer,
    oneFilm: oneFilmReducer,
    form: formReducer
})

const state = state => state;
const receive = (state, obj) => ({ ...state, ...obj });

const store = createStore(reducers, persist('state', state, receive));

export {store}