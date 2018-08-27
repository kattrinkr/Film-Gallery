import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { formValueSelector } from 'redux-form'

import Registration from '../View'
import {emailValidator, passwordValidator} from '../Servises/validator'
import * as Actions from '../Actions'

class RegistrationContainer extends Component {
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
        fetch('/films-library/registration', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            }, 
            body: JSON.stringify({
                name: data.name,
                email: data.email, 
                password: data.password
            })
        })
        .then(res => res.json())
        .then(res => {
            const payload = {
                ...data,
                message: res.message
            }
            this.setState(payload)    
            this.props.actions.setData(payload);
        })
    }

    render() {
        const { message } = this.state;
        const props = {
            message,
            onSubmit: this.onSubmit,
            form: 'SignupForm',
            validate: RegistrationContainer.validate
        }
        return <Registration {...props} />;
    }
}
const selector = formValueSelector('SignupForm')

const mapStateToProps = (state) => ({
    email: selector(state, 'email'),
    password: selector(state, 'password')
})

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(Actions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)