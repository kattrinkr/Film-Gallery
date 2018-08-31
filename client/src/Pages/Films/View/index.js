import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import '../../../../node_modules/font-awesome/css/font-awesome.min.css'

import {AVATARS} from '../Constants'
import Styles from './styles'

const Films = ({filmItems, categories, category, sortByRating, name, categorySort, ratingSort, filmSearch, logout, classes}) => {
    return (
        <div className={classes.gallery}>
            <div className={classes.dashboard}>
                <p className={classes.name}>{name}</p>
                <div className={classes.category}>
                    <p>Sort by CATEGORY:</p>
                    <Select onChange={categorySort} value={category} className={classes.categorySelect}>
                        {categories.map(item => (
                            <MenuItem   key={item} value={item}>
                                {item}
                            </MenuItem>
                        ))}
                    </Select>
                </div>
                <div className={classes.rating}>
                    <p>Sort by RATING:</p>
                    <Switch checked={sortByRating} onChange={ratingSort} value='lol'/>
                    </div>
                <div className={classes.title}>
                    <p>Search by TITLE:</p>
                    <TextField onChange={filmSearch} className={classes.titleSearch}/>
                    <i className="fa fa-search" style={{position: 'relative', left: '-20px'}}></i>
                </div>
                <a onClick={logout} className={classes.logout}>LogOut</a>
            </div>
            <div className={classes.library}>{filmItems.map(item => 
                <div className={classes.film} key={item._id}>
                    <h2 className={classes.filmName}>{item.title}</h2>
                    <img src={AVATARS[item._id]} alt={item.title} className={classes.avatar}/>
                    <p className={classes.p}>Category: {item.category}</p>
                    <p>{item.description}</p>
                    <p className={classes.p}>Rating: {item.rating}</p>
                    <Button className={classes.definition} variant="contained" color="primary" component={Link} to={process.env.PUBLIC_URL+`/films/${name}/definition/${item._id}`}>See more </Button>
                </div>)}
            </div>
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