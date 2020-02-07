const db = require('../data/dbConfig');

module.exports = {
    getAllReps,
    getUserRepById,
    getUserReps
}

function getAllReps() {
    return db('user_representatives')
        .join('users', 'user_representatives.user_id', '=', 'user.id')
        .join('representatives', 'user_representatives.rep_id', '=', 'representatives.id')
}

function getUserRepById(id) {
    return db('user_representatives')
        .where('user_representatives', id)
        .first()
        .join('users', 'user_representatives.user_id', '=', 'user.id')
        .join('representatives', 'user_representatives.rep_id', '=', 'representatives.id')
}

function getUserReps(id) {
    return db('representatives')
        .where('representatives.id', id)
        .join('users', 'representatives.id', '=', 'users.id')
}

// function addUserReps(rep) {
//     return db('representatives')

// }