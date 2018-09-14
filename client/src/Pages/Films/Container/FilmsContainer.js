import React, { Component } from 'react'

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Films from '../View'
import * as Actions from '../Actions'
import {categorySortFetch, ratingSortFetch, filmSearchFetch, infiniteScrollFetch} from '../Servises'

class FilmsContainer extends Component {
    constructor(props){
        super(props); 
        this.categorySort = this.categorySort.bind(this);
        this.ratingSort = this.ratingSort.bind(this);
        this.filmSearch = this.filmSearch.bind(this);
        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        const state = JSON.parse(localStorage.getItem('state'));
        const name = state.login.name;

        if (!name) {
            return this.props.history.push(`${process.env.PUBLIC_URL}/login`)
        }
        window.scrollTo(0, 0);
        window.addEventListener('scroll', this.infiniteScroll);
        fetch('https://film-library.herokuapp.com/films-library')
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
                let categories = filmItems.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
                categories.push('all');
                const result = {
                    name: name,
                    filmItems: filmItems, 
                    categories: categories,
                    sortByRating: false
                }
                this.props.actions.firstFilms(result);
            }
        })  
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.infiniteScroll);
    }

    async categorySort(event) {
        this.props.actions.categorySort(await categorySortFetch(event, this.props.films))
    }

    async ratingSort() {
        this.props.actions.ratingSort(await ratingSortFetch(this.props.films))
    }

    async filmSearch(event) {
        const search = event.target.value;
        this.props.actions.filmSearch(await filmSearchFetch(search, this.props.films));
    }

    logout() {
        this.props.login.email = '';
        this.props.login.name = '';
        this.props.login.message = '';
        this.props.registration.message = '';
        localStorage.clear();
        fetch('https://film-library.herokuapp.com/films-library/logout', {method: 'POST'}).then();
        return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    async infiniteScroll() {
        this.props.actions.infiniteScroll(await infiniteScrollFetch(this.props.films));
        
    }

    render() {
        const {name,  filmItems, categories, category, sortByRating} = this.props.films;

        const props = {
            name,
            filmItems,
            categories,
            category,
            sortByRating,
            categorySort: this.categorySort,
            ratingSort: this.ratingSort,
            filmSearch: this.filmSearch,
            logout: this.logout
        }
        return <Films {...props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(FilmsContainer)