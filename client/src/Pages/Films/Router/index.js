import React from 'react'

import { Switch, Route } from 'react-router-dom'

import OneFilm from '../OneFilm'
import Films from '../index'

const Router = () => {
    return (
        <Switch>
            <Route exact path={process.env.PUBLIC_URL + `/films/:user?/definition/:id?`} component={OneFilm}/>
            <Route component={Films}/>
        </Switch>
    )
}

export default Router