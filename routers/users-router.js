const router = require('express').Router();

const Users = require('../models/users-model');

// GET Users

router.get('/', (req, res) => {
    Users.getUsers()
        .then(users => {
            res.status(200).json(users)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'There was an error retrieving users.' })
        })
})

// GET User by ID

router.get('/:id', (req, res) => {
    const userId = req.params.id;

    Users.getUserById(userId)
        .then(user => {
            if (user) {
                res.status(200).json(user)
            } else {
                res.status(404).json({ errorMessage: 'This user does not exist.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retrieve user' })
        })
})

// Add User

router.post('/register', (req, res) => {
    const newUser = req.body;
    console.log(newUser)

    if (!newUser.address || !newUser.email) {
        res.status(400).json({ errorMessage: 'User requires an address and email' })
    } else {
        Users.addUser(newUser)
            .then(user => {
                res.status(201).json(user)
            })
            .catch(err => {
                res.status(422).json({ error: err, message: 'Error adding user, a user with this name may already exist' })
            })
    }
})

module.exports = router;