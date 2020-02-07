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

// GET User Representatives

module.exports = router;