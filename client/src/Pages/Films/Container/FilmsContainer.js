import React, { Component } from 'react';

import Films from '../View'

class FilmsContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            filmItems: null
        }
     }

    componentDidMount() {
    fetch('/films-library')
        .then(res => res.json())
        .then(filmItems => {
            this.setState(() => {
                return {
                    filmItems: filmItems
                }  
            })
        })  
    }

    render() {
        const {filmItems} = this.state;
        const props = {
            filmItems
        }
        return <Films {...props} />;
    }
}

export default FilmsContainer;