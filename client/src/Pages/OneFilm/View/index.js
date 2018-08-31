import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import Input from '@material-ui/core/Input';

import Styles from './styles'
import {AVATARS} from '../../Films/Constants'

const Films = ({name, film, filmComments, isRatingPut, isCommentPut, rating, rememberNewComment, newComment, sendComment, logout, classes}) => {
    return (
        <div className={classes.library}>
            <div className={classes.dashboard}>
                <p className={classes.name}>{name}</p>
                <a onClick={logout} className={classes.logout}>LogOut</a>
            </div>
            <div className={classes.film}>
                <h2 className={classes.title}>{film.title}</h2>
                <img src={AVATARS[film._id]} alt={film.title} className={classes.avatar}/>
                <p className={classes.p}>Category: {film.category}</p>
                <p className={classes.definition}>{film.description}</p>
                <p className={classes.p}>Rating: {film.rating}</p>
                <div className={classes.rating}>
                    <div className={classes.ratingButtons} hidden={isRatingPut}>
                        <p>Put your own rating to this film:</p>
                        <button value={1} onClick={rating}>1</button>
                        <button value={2} onClick={rating}>2</button>
                        <button value={3} onClick={rating}>3</button>
                        <button value={4} onClick={rating}>4</button>
                        <button value={5} onClick={rating}>5</button>
                    </div>
                    <p hidden={!isRatingPut}>Thank you for choose!</p>
                </div>
                <div className={classes.gallery}></div>
                <div className={classes.comments}>
                    <p>Put your own comment to this film:</p> 
                    {filmComments.map((item, i) => 
                        <p className={classes.comment} key={i}>{item}</p>
                    )}
                    <Input className={classes.input} placeholder='Comment' onChange={rememberNewComment} value={isCommentPut? '' : newComment}/>
                    <p hidden={!isCommentPut}>Thank you for comment!</p>
                    <button onClick={sendComment}>Send</button>
                </div>
                <Button className={classes.back} variant="contained" color="primary" component={Link} to={process.env.PUBLIC_URL+`/films/${name}`}>Back</Button>
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