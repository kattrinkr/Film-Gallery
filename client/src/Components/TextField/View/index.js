import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

import Styles from './styles';

let TextFields = ({input, floatingLabelText, type, meta, classes}) => {
    const props = {
        label: floatingLabelText,
        type: type,
        className: classes.input,
        error: meta.submitFailed && !meta.valid,
        helperText: meta.submitFailed && meta.error,
        ...input
    }
    return (
        <TextField { ...props }/>
    )
}
export default withStyles(Styles)(TextFields)