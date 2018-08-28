import {Strategy as LocalStrategy} from 'passport-local'

import Users from '../models/userModel'

async function Passport(passport) {
    await passport.serializeUser(function(user, done) {
        done(null, user.id);
    })

    await passport.deserializeUser(function(id, done) {
        Users.findById(id, function(err, user) {
            done(err, user);
        })
    })

    passport.use('local-signup', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password',
        passReqToCallback: true
    }, function(req, email, password, done) {
        process.nextTick(async function() {
            let result;
            try {
                const user = await Users.findOne({ 'email' :  email });
                if (user) {
                   result =  done(null, false, { message: `Email ${email} is already exist` });
                } else {
                    let newUser = new Users();
                    if (req.body.name) {
                        newUser.name = req.body.name
                    }
                    newUser.email = email;
                    newUser.password = newUser.generateHash(password);
                    const save = await newUser.save();
                    if (!save) {
                        result = done(null, newUser, { message: 'Error with connection' })
                    } else {
                        result = done(null, newUser, { message: 'Success'})
                    }
                }
            } catch (err) {
                result = done(err, false, { message: 'Internal error' })
            }
            return result
        })
    }))

    passport.use('local-login', new LocalStrategy({
        usernameField : 'email',
        passwordField : 'password'
    }, async function(email, password, done) {
        let result;
        try {
            const user = await Users.findOne({ 'email' :  email });
            if (!user) {
                result =  done(null, false, { message: `User with email ${email} is not exist` })
            } else if (!user.validPassword(password)) {
                result = done(null, false, { message: `Wrong password for ${email}` })
            } else {
                result = done(null, user, { name: user.name, message: 'Success' })
            }
        } catch (err) {
            result = done(err, false, { message: 'Internal error' })
        }
        return result
    }))
}

export default Passport