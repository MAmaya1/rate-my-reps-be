const db = require('../data/dbConfig');

module.exports = {
    getReps,
    getRepById,
    addRep,
    updateRep,
    deleteRep
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

function updateRep(id, changes) {
    return db('representatives')
        .where({ id })
        .update(changes)
}

function deleteRep(id) {
    return db('representatives')
        .where({ id })
        .del();
}