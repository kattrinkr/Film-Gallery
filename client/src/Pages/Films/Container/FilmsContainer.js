import React, { Component } from 'react';

import Films from '../View'

class FilmsContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            filmItems: null, 
            categories: null, 
            category: null, 
            sort: false
        }
     }

    componentDidMount() {
    fetch('/films-library')
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
                let categories = filmItems.map(item => item.category).filter((item, index, some) => some.indexOf(item) === index);
            this.setState(() => {
                return {
                    filmItems: filmItems, 
                    categories: categories,
                    sort: false
                }  
            })
            }
        })  
    }

    categoryFilter = event => {
        this.setState({ category: event.target.value });
        fetch(`/films-library/${event.target.value}`)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
            this.setState(() => {
                return {
                    filmItems: filmItems
                }  
            })
            }
        }) 
    }

    ratingSort = event => {
        if (this.state.sort) {this.componentDidMount()} else {
        fetch(`/films-library/${this.state.category}/rating`)
        .then(res => res.json())
        .then(filmItems => {
            if (filmItems) {
            this.setState(() => {
                return {
                    sort: true,
                    filmItems: filmItems
                }  
            })
            }
        }) 
    }
    }

    render() {
        const {filmItems, categories, category, sort} = this.state;
        const props = {
            filmItems,
            categories,
            category,
            sort,
            categoryFilter: this.categoryFilter,
            ratingSort: this.ratingSort
        }
        return <Films {...props} />;
    }
}

export default FilmsContainer;