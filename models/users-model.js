const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getUserById,
    updateUser,
    deleteUser
}

function getUsers() {
    return db('users');
}

function getUserById(id) {
    return db('users')
        .where({ id })
        .first();
}

function updateUser(id, changes) {
    return db('users')
        .where({ id })
        .update(changes)
}

function deleteUser(id) {
    return db('users')
        .where({ id })
        .del();
}