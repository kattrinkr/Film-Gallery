import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Redirect } from 'react-router-dom'


import Login from '../View'
import {emailValidator, passwordValidator} from '../Servises/validator'
import * as Actions from '../Actions'

class LoginContainer extends Component {
    constructor(props){
        super(props); 
        
        this.onSubmit = this.onSubmit.bind(this);
    }

    static validate = values => {
        const errors = {};
        let emailError = emailValidator(values.email);
        let passwordError = passwordValidator(values.password);
        if (emailError) {
            errors.email = emailError
        }
        if (passwordError) {
            errors.password = passwordError
        }
        return errors
    }
    
    onSubmit (data) {
        fetch('https://film-library.herokuapp.com/films-library/login', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }, 
            body: JSON.stringify({
                email: data.email, 
                password: data.password
            })
        })
        .then(res => res.json())
        .then(res => {
            const payload = {
                email: data.email,
                name: res.name,
                message: res.message
            }   

            this.props.actions.setData(payload);
        })
    }

    render() {
        const { message, name} = this.props.login;
        const props = {
            message,
            name,
            onSubmit: this.onSubmit,
            form: 'LoginForm',
            validate: LoginContainer.validate
        }
        let result;
        if (name) {
            result = <Redirect to={process.env.PUBLIC_URL + `/films/${name}`}/>;
        } else {
            result = <Login {...props} />;
        }
        return result
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

export default connect(mapStateToProps, mapDispatchToProps)(LoginContainer)