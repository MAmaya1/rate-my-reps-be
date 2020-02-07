const router = require('express').Router();

const UserReps = require('../models/user-reps-model');

// GET all User Representatives

router.get('/', (req, res) => {
    UserReps.getAllReps()
        .then(userReps => {
            res.status(200).json(userReps)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'There was an error retrieving your data!' })
        })
})

router.get('/user-reps', (req, res) => {
    UserReps.getUserReps()
        .then(userReps => {
            res.status(200).json({ error: err, message: 'Could not retrieve your representatives' })
        })
})

module.exports = router;