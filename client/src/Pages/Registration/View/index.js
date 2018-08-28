import React from 'react'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Field, reduxForm } from 'redux-form'

import TextField from '../../../Components'
import Styles from './styles'

const Registration = ({message, handleSubmit, classes}) => {
    return (
        <div>
            <form className={classes.form} onSubmit={handleSubmit}>  
                <h1>REGISTRATION</h1>
                <Field name="name"
                   floatingLabelText="Name" 
                   className={classes.input}
                   component={TextField}
                />
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
                  type="submit"> Sign Up!
                </Button>
                <p>{message}</p>
            </form>
        </div>
    )
}

export default withStyles(Styles)(reduxForm()(Registration))