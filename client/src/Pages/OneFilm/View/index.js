import React from 'react'
import PropTypes from 'prop-types'

import { withStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import { Link } from "react-router-dom"
import Input from '@material-ui/core/Input'

import GalleryOfPic from '../Components'
import Styles from './styles'
import {AVATARS} from '../../Films/Constants'
import {GALLERY} from '../Constants'

const Films = ({id, name, film, filmComments, isRatingPut, isCommentPut, rating, rememberNewComment, newComment, sendComment, logout, classes}) => {
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
                    <p className={classes.p}>Put your own rating to this film:</p>
                    <div className={classes.ratingButtons} hidden={isRatingPut}>
                        <button value={1} onClick={rating} className={classes.buttons}>1</button>
                        <button value={2} onClick={rating} className={classes.buttons}>2</button>
                        <button value={3} onClick={rating} className={classes.buttons}>3</button>
                        <button value={4} onClick={rating} className={classes.buttons}>4</button>
                        <button value={5} onClick={rating} className={classes.buttons}>5</button>
                    </div>
                    <p hidden={!isRatingPut} className={classes.p}>Thank you for choose!</p>
                </div>
                <div className={classes.gallery} id='gallery'>
                    <p className={classes.p}>Gallery:</p>
                    <GalleryOfPic images={id? GALLERY[`${id}`] : []}/>
                </div>
                <div className={classes.comments}> 
                    <p className={classes.p}>Comments:</p> 
                    {filmComments.map((item, i) => 
                        <p className={classes.comment} key={i}>{`${i+1}: ${item}`}</p>
                    )}
                    <p className={classes.p}>Put your own comment to this film:</p>
                    <Input className={classes.input} placeholder='Comment' onChange={rememberNewComment} value={newComment}/>
                    <button onClick={sendComment} className={classes.buttons}>Send</button>
                    <p hidden={!isCommentPut}>Thank you for comment!</p>
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