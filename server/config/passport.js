/*import {LocalStrategy } from 'passport-local'*/
var LocalStrategy   = require('passport-local').Strategy;

import Users from '../models/userModel'
var flash = require('connect-flash');

// expose this function to our app using module.exports
module.exports = function Passport(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function(id, done) {
        Users.findById(id, function(err, user) {
            done(err, user);
        })
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true
    }, function(req, email, password, done) {
        process.nextTick(function() {
            Users.findOne({ 'email' :  email }, function(err, user) {
                if (err)
                return done(err);
                if (user) {
                return done(null, false, req.flash('signupMessage','That email is already taken.'));
                } else {
                    var newUser = new Users();
                    newUser.name = req.body.name;
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    newUser.save(function(err) {
                        if (err)
                            throw err;
                        return done(null, newUser);
                    })
                }
            })    
        })
    }))
    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback : true 
    },
    function(req, email, password, done) {
        Users.findOne({ 'email' :  email }, function(err, user) {
            if (err)
                return done(err);
            if (!user) {
                console.log('No user found');
                return done(null, false, req.flash('loginMessage', 'No user found.'));
            }
            if (!user.validPassword(password)) {
                console.log('Oops! Wrong password.')
                return done(null, false, req.flash('loginMessage', 'Oops! Wrong password.')); 
            }
            console.log('success')
            return done(null, user);
        })
    }))
}