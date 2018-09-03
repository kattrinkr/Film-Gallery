import React, { Component } from 'react'

import OneFilm from '../View'
import {ratingFetch, sendCommentFetch} from '../Servises'

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
            fetch(`https://film-library.herokuapp.com/films-library/definition/${this.state.id}`)
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

    async rating (event) {
        const result = await ratingFetch(event, this);
        this.setState(() => {
            return result  
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

    async sendComment () {
        const result = await sendCommentFetch(this);
        this.setState(() => {
            return result  
        })
    }

    logout() {
        fetch('/films-library/logout', {method: 'POST'}).then();
        return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    render() {
        const {id,name, film, filmComments, isRatingPut,newComment, isCommentPut} = this.state;
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

export default OneFilmContainer;