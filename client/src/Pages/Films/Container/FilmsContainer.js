import React, { Component } from 'react';

import Films from '../View'

class FilmsContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            filmItems: [], 
            categories: [], 
            category: 'all', 
            sortByRating: false,
            page: 2
        }

        this.infiniteScroll = this.infiniteScroll.bind(this);
    }

    componentDidMount() {
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
                        sortByRating: false
                    }  
                })
            }
        })  
    }

    categorySort = event => {
        this.setState({ category: event.target.value });
        let url;
        if (event.target.value !== 'all') {
            url = `/films-library/${event.target.value}`
        } else {
            url = `/films-library`
        }
        fetch(url)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
            this.setState(() => {
                return {
                    filmItems: filmItems,
                    sortByRating: false.category
                }  
            })
            }
        }) 
    }

    ratingSort = event => {
        let url;
        let sort;
        if (this.state.sortByRating) {
            if (this.state.category !== 'all') {
                url = `/films-library/${this.state.category}`
            } else {
                url = `/films-library`
            }
            sort = false; 
        } else {
            if (this.state.category !== 'all') {
                url = `/films-library/${this.state.category}/sort/rating`
            } else {
                url = `/films-library/sort/rating`
            }
            sort = true;
        }
        fetch(url)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
            this.setState(() => {
                return {
                    filmItems: filmItems,
                    sortByRating: sort
                }  
            })
            }
        }) 
    }

    filmSearch = event => {
        let url;
        if (event.target.value) {
            url = `/films-library/film/${event.target.value}`
        } else {
            url = `/films-library`
        }
        fetch(url)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
            this.setState(() => {
                return {
                    filmItems: filmItems,
                    sortByRating: false,
                    category: 'all'
                }  
            })
            }
        })
    }

    infiniteScroll (){
        if (this.state.page < 4) {
            let url;
        if (this.state.category !== 'all') {
            url = `/films-library/${this.state.category}/pages/${this.state.page}`;
            if (this.state.sortByRating) url = `/films-library/${this.state.category}/pages/${this.state.page}/sort/rating`
            else url = `/films-library/${this.state.category}/pages/${this.state.page}`
        } else {
            if (this.state.sortByRating) url = `/films-library/pages/${this.state.page}/sort/rating`
            else url = `/films-library/pages/${this.state.page}`
        }
        fetch(url)
            .then(res => res.json())
            .then(filmItems => {
                if (filmItems) {
                    const prevFilms = this.state.filmItems;
                    let result = prevFilms.concat(filmItems);
                    let categories = result.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
                    categories.push('all');
                    this.setState((prevState) => {
                        return {
                            filmItems: result,
                            categories: categories,
                            page: prevState.page + 1
                        }  
                    })
                }
            })
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
            infiniteScroll: this.infiniteScroll
        }
        return <Films {...props} />;
    }
}

export default FilmsContainer;