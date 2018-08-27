import passport from 'passport'

import Films from '../models/filmModel'

async function getFilms(req, res) {
    let search = {};
    if (req.params.category) {
        search.category = req.params.category;
    } 
    try {
        const filmItems = await Films.find(search);
        //res.render('../public/films.ejs', {films: filmItems, next: next, prev: prev, page: page, category: req.params.category});  
        res.json(filmItems)
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