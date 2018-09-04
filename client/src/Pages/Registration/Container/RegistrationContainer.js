import React, { Component } from 'react';

import { connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import Registration from '../View'
import {emailValidator, passwordValidator} from '../Servises/validator'
import * as Actions from '../Actions'

class RegistrationContainer extends Component {
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
        fetch('https://film-library.herokuapp.com/films-library/registration', {
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
                email: data.email,
                message: res.message
            }  
            this.props.actions.setData(payload);
            if (!res.message) {
                return this.props.history.push(`${process.env.PUBLIC_URL}/login`)
            }
        })
    }

    render() {
        const { message } = this.props.registration;
        const props = {
            message,
            onSubmit: this.onSubmit,
            form: 'SignupForm',
            validate: RegistrationContainer.validate
        }
        return <Registration {...props} />;
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

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationContainer)