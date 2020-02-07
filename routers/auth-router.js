const router = require('express').Router();

const Users = require('../models/users-model');

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