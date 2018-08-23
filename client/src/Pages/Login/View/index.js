import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'

import Styles from './styles';

const Login = ({valid, classes}) => {
    return (
        <div className={classes.form}>
            <h1>LOL</h1>
        </div>
    )
}

Login.propTypes = {
    valid: PropTypes.object
}

export default withStyles(Styles)(Login)