import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Styles from './styles'

const Films = ({classes}) => {
    return (
        <div>
<h1>Film</h1>
        </div>
    )
}

Films.propTypes = {
    filmItems: PropTypes.array,
    categories: PropTypes.array,
    category: PropTypes.string,
    sortByRating: PropTypes.bool
}

export default withStyles(Styles)(Films)