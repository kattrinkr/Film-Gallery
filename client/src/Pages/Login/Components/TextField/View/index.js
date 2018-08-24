import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

let TextFields = ({input, floatingLabelText, meta, classes}) => {
    return (
        <TextField label={floatingLabelText}
                   className={classes.input}
                   error={meta.submitFailed && !meta.valid }
                   {...input}
                   helperText={meta.submitFailed && meta.error}/>
    )
}
export default withStyles(Styles)(TextFields)