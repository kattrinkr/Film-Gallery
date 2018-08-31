import express from 'express'
import bodyPaser from 'body-parser'
import mongoose from 'mongoose'
import passport from 'passport'

import Passport from './config/passport'
import {router as filmsRouter} from './routes/filmsRouter.js'
import {router as usersRouter} from './routes/usersRouter.js'

Passport(passport);
const ERROR_MESSAGE = { Error: 'URL not found' };
const app = express();

async function run() {
    mongoose.connect('mongodb://users:aA7465315@ds225382.mlab.com:25382/film_library', { useNewUrlParser: true });
    await mongoose.connection;
    app.use(express.static(__dirname + '/public'));
    app.use(bodyPaser.json());
    app.use(bodyPaser.urlencoded({ extended: true }));
    
    app.use('/films-library', filmsRouter);
    app.use('/films-library', usersRouter);
    
    app.use(function(req, res) {
        res.status(404).json(ERROR_MESSAGE)
    })
    app.listen(process.env.PORT || 3001, () => console.log('App is listening!'));
}
run().catch(error => console.error(error.stack));
