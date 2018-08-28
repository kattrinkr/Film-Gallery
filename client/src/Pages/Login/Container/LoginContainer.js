import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Login from '../View'
import {emailValidator, passwordValidator} from '../Servises/validator'
import * as Actions from '../Actions'


class LoginContainer extends Component {
    constructor(props){
        super(props); 

        this.state = {
            message: null
        }
        
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
        //this.props.history.push(`${process.env.PUBLIC_URL}`+'/login-redux-form/success');
        fetch('/films-library/login', {
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
            this.setState(payload)    
            this.props.actions.setData(payload);
        })
    }

    render() {
        const { message, name } = this.state;
        const props = {
            message,
            name,
            onSubmit: this.onSubmit,
            form: 'LoginForm',
            validate: LoginContainer.validate
        }
        return <Login {...props} />;
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(false, mapDispatchToProps)(LoginContainer)