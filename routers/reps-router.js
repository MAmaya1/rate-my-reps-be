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

// GET Representative by ID

router.get('/:id', (req, res) => {
    const repId = req.params.id;

    Reps.getRepById(repId)
        .then(rep => {
            if (rep) {
                res.status(200).json(rep)
            } else {
                res.status(404).json({ errorMessage: 'A representative with the specified ID does not exist.' })
            }
        })
        .catch(err => {
            res.status(500).json({ error: err, message: 'Could not retireve representative' })
        })
})

// Add new representative

router.post('/', (req, res) => {
    const newRep = req.body;

    console.log(req.body)

    if (!newRep.name && !newRep.office && !newRep.division) {
        res.status(400).json({ errorMessage: 'New representative is missing data' })
    } else {
        Reps.addRep(newRep)
            .then(rep => {
                res.status(201).json(rep)
            })
            .catch(err => {
                res.status(500).json({ error: err, message: 'This representative already exists in the database' })
            })
    }
})

module.exports = router;