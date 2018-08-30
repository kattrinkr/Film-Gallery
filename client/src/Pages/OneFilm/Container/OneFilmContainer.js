import React, { Component } from 'react'

import OneFilm from '../View'

class OneFilmContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            film: {},
            id: this.props.match.params.id,
            name: this.props.match.params.user
        }
    }

    render() {
        const {filmItems, categories, category, sortByRating} = this.state;
        const props = {
            filmItems,
            categories,
            category,
            sortByRating,
            categorySort: this.categorySort,
            ratingSort: this.ratingSort,
            filmSearch: this.filmSearch,
            logout: this.logout
        }
        return <OneFilm {...props} />;
    }
}

export default OneFilmContainer;