import React, { Component } from 'react';

import Login from '../View'

class LoginContainer extends Component {
    constructor(props){
        super(props); 
        this.state = {
            valid: null
        }
     }

    componentDidMount() {
    fetch('/films-library/login', {method: 'POST'})
        .then(res => res.json())
        .then(res => {
            console.log(res);
            this.setState(() => {
                return {
                    valid: res
                }  
            })
        })  
    }

    render() {
        const {valid} = this.state;
        const props = {
            valid
        }
        return <Login {...props} />;
    }
}

export default LoginContainer;