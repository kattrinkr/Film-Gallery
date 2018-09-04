import React, { Component } from 'react'

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import OneFilm from '../View'
import * as Actions from '../Actions'
import {ratingFetch, sendCommentFetch} from '../Servises'

class OneFilmContainer extends Component {
    constructor(props){
        super(props); 

        this.rating = this.rating.bind(this);
        this.logout = this.logout.bind(this);
        this.rememberNewComment = this.rememberNewComment.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    componentDidMount() {
        if (!this.props.location.key) {
            return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
        } else {
            fetch(`https://film-library.herokuapp.com/films-library/definition/${this.props.match.params.id}`)
            .then(res => res.json())
            .then(film => {
                if (film) {
                    const result = {
                        id: this.props.match.params.id,
                        name: this.props.match.params.user,
                        film: film,
                        filmComments: film.comments,                 
                        isRatingPut: false,
                        isCommentPut: false
                    }
                    this.props.actions.firstFilm(result);
                }
            })
        }
    }

    async rating (event) {
        this.props.actions.rating(await ratingFetch(event, this.props.oneFilm))
    }

    rememberNewComment (event) {
        const result = {
            newComment: event.target.value
        }
        this.props.actions.rememberNewComment(result)
    }

    async sendComment () {
        if (this.props.oneFilm.newComment.length > 2) {
            this.props.oneFilm.filmComments.push(this.props.oneFilm.newComment);
            this.props.actions.sendComment(await sendCommentFetch(this.props.oneFilm))
        }
    }

    logout() {
        this.props.login.email = '';
        this.props.login.name = '';
        this.props.login.message = '';
        fetch('https://film-library.herokuapp.com/films-library/logout', {method: 'POST'}).then();
        return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    render() {
        const {id, name, film, filmComments, isRatingPut,newComment, isCommentPut} = this.props.oneFilm;
        const props = {
            id,
            name,
            film,
            filmComments,
            isRatingPut,
            newComment,
            isCommentPut,
            rating: this.rating,
            rememberNewComment: this.rememberNewComment,
            sendComment: this.sendComment,
            logout: this.logout
        }
        return <OneFilm {...props} />;
    }
}

const mapStateToProps = (state) => {
    return state;
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(OneFilmContainer)