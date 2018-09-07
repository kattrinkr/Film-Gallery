import React from 'react'

import { Provider } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import {store} from './Reducer/Reducer'
import Registration from './Pages/Registration'
import Login from './Pages/Login'
import FilmsRouter from './Pages/Films/Router'
import Error from './Pages/Error'

const App = () => {
    return ( 
        <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path={process.env.PUBLIC_URL + '/'} component={Registration}/>
                <Route exact path={process.env.PUBLIC_URL + '/registration'} component={Registration}/>
                <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
                <Route exact path={process.env.PUBLIC_URL + `/films/:user?/:definition?/:id?`} component={FilmsRouter}/>
                <Route component={Error}/>
            </Switch>
        </BrowserRouter>
        </Provider>
    )
}

export default App


