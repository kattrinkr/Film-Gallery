import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {store} from './Reducer/Reducer'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import Films from './Pages/Films'
import Error from './Pages/Error'

const App = () => {
    return ( 
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/registration'} component={Registration}/>
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
                <Route exact path={process.env.PUBLIC_URL + '/films'} component={Films}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
        </Provider>
    )
}

export default App;


