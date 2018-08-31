import React, { Component } from 'react'

import Films from '../View'
import {categorySortFetch, ratingSortFetch, filmSearchFetch, infiniteScrollFetch} from '../Servises'

class FilmsContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            filmItems: [], 
            categories: [], 
            category: 'all', 
            sortByRating: false,
            page: 2,
            bottom: 0,
            search: '',
            name: this.props.match.params.user
        }

        this.categorySort = this.categorySort.bind(this);
        this.ratingSort = this.ratingSort.bind(this);
        this.filmSearch = this.filmSearch.bind(this);
        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if (!this.props.match.params.user || !this.props.location.key) {
            return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
        }
        window.addEventListener('scroll', this.infiniteScroll);
        fetch('/films-library')
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
                let categories = filmItems.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
                categories.push('all');
                this.setState(() => {
                    return {
                        filmItems: filmItems, 
                        categories: categories,
                        sortByRating: false,
                        bottom: window.scrollY
                    }  
                })
            }
        })  
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.infiniteScroll);
    }

    async categorySort(event) {
        const result = await categorySortFetch(event, this);
        this.setState(() => {
            return result  
        })
    }

    async ratingSort() {
        const result = await ratingSortFetch(this);
        this.setState(() => {
            return result  
        }) 
    }

    async filmSearch(event) {
        const result = await filmSearchFetch(event, this);
        this.setState(() => {
            return result  
        })
    }

    logout() {
        fetch('/films-library/logout', {method: 'POST'}).then();
        return this.props.history.push(`${process.env.PUBLIC_URL}/login`);
    }

    async infiniteScroll() {
        const result = await infiniteScrollFetch(this);
        this.setState(() => {
            return result  
        })
    }

    render() {
        const {filmItems, categories, category, sortByRating, name} = this.state;
        const props = {
            filmItems,
            categories,
            category,
            sortByRating,
            name,
            categorySort: this.categorySort,
            ratingSort: this.ratingSort,
            filmSearch: this.filmSearch,
            logout: this.logout
        }
        return <Films {...props} />
    }
}

export default FilmsContainer;