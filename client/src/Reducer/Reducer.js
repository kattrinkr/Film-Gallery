import { createStore } from 'redux'
import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form';

import reducer from '../Pages/Registration/Reducer'

const reducers = combineReducers({
    reducer: reducer,
    form: formReducer
})

const store = createStore(reducers);

export {store}