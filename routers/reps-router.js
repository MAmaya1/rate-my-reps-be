const router = require('express').Router();

const Reps = require('../models/reps-model');

// GET Representatives

router.get('/', (req, res) => {
    Reps.getReps()
        .then(reps => {
            res.status(200).json(reps)
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'There was an error retrieving your representatives!' })
        })
})

module.exports = router;