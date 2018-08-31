import React, { Component } from 'react'

import OneFilm from '../View'

class OneFilmContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            film: {},
            filmComments: [],
            id: this.props.match.params.id,
            name: this.props.match.params.user,
            isRatingPut: false,
            isCommentPut: false,
            newComment: ''
        }

        this.rating = this.rating.bind(this);
        this.logout = this.logout.bind(this);
        this.rememberNewComment = this.rememberNewComment.bind(this);
        this.sendComment = this.sendComment.bind(this);
    }

    componentDidMount() {
        if (!this.props.location.key) {
            return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
        } else {
            fetch(`/films-library/definition/${this.state.id}`)
            .then(res => res.json())
            .then(film => {
                if (film) {
                    this.setState(() => {
                        return {
                            film: film,
                            filmComments: film.comments
                        }  
                    })
                }
            })
        }
    }

    rating (event) {
        fetch(`/films-library/rating/${this.state.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }, 
            body: JSON.stringify({
                rating: event.target.value
            })})
            .then(res => res.json())
            .then(film => {
                this.setState(() => {
                    return {
                        isRatingPut:  true
                    }  
                }) 
            })
    }

    rememberNewComment (event) {
        const newComment = event.target.value;
        this.setState(() => {
            return {
                newComment: newComment
            }  
        })
    }

    sendComment () {
        fetch(`/films-library/comment/${this.state.id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }, 
            body: JSON.stringify({
                comment: this.state.newComment
            })})
            .then(res => res.json())
            .then(film => {
                this.setState(() => {
                    return {
                        isCommentPut:  true
                    }  
                })
            })
    }

    logout() {
        fetch('/films-library/logout', {method: 'POST'}).then();
        return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    render() {
        const {name, film, filmComments, isRatingPut,newComment, isCommentPut} = this.state;
        const props = {
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

export default OneFilmContainer;