import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Switch from '@material-ui/core/Switch';

import Styles from './styles';

const Films = ({filmItems, categories, category, sort, categoryFilter, ratingSort, classes}) => {
    return (
        <div>
            <Select onChange={categoryFilter} value={category}>
            {categories? categories.map(item => (
                <MenuItem
                    key={item}
                    value={item}
                >
                    {item}
                </MenuItem>
            )): null}
          </Select>
          <Switch
          checked={sort}
          onChange={ratingSort}
        />
        <div>{filmItems? filmItems.map(item => 
            <div className={classes.film} key={item._id}>
                <h3>ID: {item._id}</h3>
                <h2>{item.title}</h2>
                <p>Category: {item.category}</p>
                <p>{item.description}</p>
                <p>Rating: {item.rating}</p>
            </div>) : null}
        </div>
        </div>
    )
}

Films.propTypes = {
    filmItems: PropTypes.array
}

export default withStyles(Styles)(Films)