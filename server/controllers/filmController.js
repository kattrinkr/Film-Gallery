import Users from '../models/userModel'
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

async function registration(req, res) {
    /*const user = new Users ({ 
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    })
    try {
        const userExist = await Users.findOne({email: req.body.email});
        if (userExist) {
            res.status(422).send(`User with EMAIL ${req.body.email} is already exist`)
        } else {
            const userItem = await user.save();
            res.send(userItem);
        }
    } catch (err) {
        if (err.name === 'MongoError' && err.code === 11000) {
            res.status(409).send('Duplicate key');
        }
        res.status(500).send(err);
    } */
    console.log(res)
}

async function logIn(req, res) {
    try {
        let userItem = await Users.findOne({email: req.body.email});
        if (!userItem) {
            res.status(422).send(`User with EMAIL ${req.body.email} is not exist`)
        } else {
            userItem = await Users.findOne({email: req.body.email, password: req.body.password})
            if (!userItem) {
                res.status(422).send(`Wrong password for user with EMAIL ${req.body.email}`)
            } else {
                res.send(`Welcome to the film library, ${userItem.name}!`)
            }
        }
    } catch (err) {
        res.status(500).send(err);
    }
}

export {getFilms, registration, logIn}