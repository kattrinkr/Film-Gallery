import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './Pages/Login'
import Films from './Pages/Films'
import Error from './Pages/Error'

const App = () => {
    return (
        <BrowserRouter>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/login'} component={Login}/>
            <Route exact path={process.env.PUBLIC_URL + '/films'} component={Films}/>
            <Route component={Error}/>
          </Switch>
        </BrowserRouter>
    )
}

export default App;


