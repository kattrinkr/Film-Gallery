import React, { Component } from 'react'

import Films from '../View'
import {categorySortUrl, ratingSortUrl,filmSearchUrl, infiniteScrollUrl} from '../Servises'

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

        this.infiniteScroll = this.infiniteScroll.bind(this);
        this.logout = this.logout.bind(this);
    }

    componentDidMount() {
        if (!this.props.match.params.user) {
            return this.props.history.push(`${process.env.PUBLIC_URL}`+'/login');
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

    categorySort = event => {
        const url = categorySortUrl(event, this.state);
        fetch(url)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
                this.setState(() => {
                    return {
                        filmItems: filmItems,
                        category: event.target.value,
                        page: 2,
                        bottom: 0
                    }  
                })
            }
        }) 
    }

    ratingSort = event => {
        const result = ratingSortUrl(this.state);
        fetch(result.url)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
                this.setState(() => {
                    return {
                        filmItems: filmItems,
                        sortByRating: result.sort,
                        page: 2,
                        bottom: 0
                    }  
                })
            }
        }) 
    }

    filmSearch = event => {
        const search=`${event.target.value}`
        const url = filmSearchUrl(event, this.state);
        fetch(url)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
                this.setState(() => {
                    return {
                        filmItems: filmItems,
                        page: 2,
                        search: search,
                        bottom: 0
                    }  
                })
            }
        })
    }

    logout() {
        fetch('/films-library/logout', {method: 'POST'}).then();
        return this.props.history.push(`${process.env.PUBLIC_URL}`+'/login');
    }

    infiniteScroll (){
        const LIMIT = 4;
        if (this.state.page < LIMIT) {
            let url = infiniteScrollUrl(this.state);
        if ((window.innerHeight + document.documentElement.scrollTop === document.documentElement.offsetHeight) && (window.scrollY > this.state.bottom)) {
            fetch(url)
            .then(res => res.json())
            .then(filmItems => {
                if (filmItems) {
                    let prevFilms = this.state.filmItems;
                    let result = prevFilms.concat(filmItems);
                    let categories = result.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
                    categories.push('all');
                    this.setState((prevState) => {
                        return {
                            filmItems: result,
                            categories: categories,
                            page: prevState.page + 1,
                            bottom: window.scrollY,
                        }  
                    })
                }
            })
        }
    }
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