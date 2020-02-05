const db = require('../data/dbConfig');

module.exports = {
    getReps,
    getRepById,
    addRep
}

function getReps() {
    return db('representatives');
}

function getRepById(id) {
    return db('representatives')
        .where({ id })
        .first();
}

function addRep(rep) {
    return db('representatives')
        .insert(rep, 'id')
        .then(([id]) => {
            return getRepById(id);
        })
}