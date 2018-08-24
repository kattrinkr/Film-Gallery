import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Styles from './styles';

const Films = ({filmItems, classes}) => {
    return (
        <div>{filmItems? filmItems.map(item => 
            <div className={classes.film} key={item._id}>
                <h3>ID: {item._id}</h3>
                <h2>{item.title}</h2>
                <p>Category: {item.category}</p>
                <p>{item.description}</p>
                <p>Rating: {item.rating}</p>
            </div>) : null}
        </div>
    )
}

Films.propTypes = {
    filmItems: PropTypes.array
}

export default withStyles(Styles)(Films)