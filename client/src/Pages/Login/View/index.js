import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'
import { Link } from "react-router-dom"

import TextField from '../../../Components'
import Styles from './styles';

const Login = ({message, handleSubmit, classes}) => {
    return (
        <div className={classes.login}>
            <form className={classes.form} onSubmit={handleSubmit}>  
                <h1 className={classes.h1}>LOGIN</h1>
                <Field name="email"
                   floatingLabelText="Email" 
                   className={classes.input}
                   component={TextField}
                />
                <Field name="password"
                   type="password"
                   floatingLabelText="Password" 
                   className={classes.input}
                   component={TextField}
                />
                <Button 
                  variant="contained" 
                  color="primary" 
                  className={classes.button}
                  type="submit"> Log In!
                </Button>
                <p>{message}</p>
            </form>
            <Button color="secondary" component={Link} to={process.env.PUBLIC_URL+`/registration`}>Sign Up?</Button>
        </div>
    )
}

export default withStyles(Styles)(reduxForm()(Login))