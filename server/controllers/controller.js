import passport from 'passport'

import Films from '../models/filmModel'

async function getFilms(req, res) {
    let search = {};
    let sort = {};
    if (req.params.category) {
        if (req.params.category === 'null') {
             
    if (req.params.rating) {
        sort.rating = -1
    }
        } else
        search.category = req.params.category;
    }
    try {
        const filmItems = await Films.find(search).sort(sort); 
        res.json(filmItems);
    } catch (err) {
        res.status(500).send(err);
    }
}

async function registration(req, res, next) {
    await passport.authenticate('local-signup', function(err, user, info) {
        let result;
        if (err) { 
            result =  next(err) 
        } else if (!user) { 
            result = res.json({
                message: info.message
            })
        } else {
            result = res.json({
                message: info.message
            })
        }
        return result;
    })(req, res, next)
}

async function login(req, res, next) {
    await passport.authenticate('local-login', function(err, user, info) {
        let result;
        if (err) { 
            result = next(err) 
        } else if (!user) {
            result = res.json({
                message: info.message
            })
        } else {
            result = res.json({
                message: info.message
            })
        }
        return result;
    })(req, res, next)
}

export {getFilms, registration, login}