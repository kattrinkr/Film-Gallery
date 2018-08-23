import React from 'react'

import { withStyles } from '@material-ui/core/styles'

import Styles from './styles';

const Error = ({classes}) => (
    <div className={classes.wrapper}>
      <h1 className={classes.message}>
          404 - страница не найдена
        </h1>
    </div>
)

export default withStyles(Styles)(Error)