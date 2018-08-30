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

    componentDidMount() {
        if (!this.props.location.key) {
            return this.props.history.push(`${process.env.PUBLIC_URL}`+'/login');
        } else {
            fetch(`/films-library/definition/${this.state.id}`)
            .then(res => res.json())
            .then(film => {
                if (film) {
                    this.setState(() => {
                        return {
                            film: film
                        }  
                    })
                }
            })
        }
    }

    render() {
        const {film} = this.state;
        const props = {
            film
        }
        return <OneFilm {...props} />;
    }
}

export default OneFilmContainer;