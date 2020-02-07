const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getUserById,
    addUser,
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

function addUser(user) {
    return db('users')
        .insert(user, 'id')
        .then(([id]) => {
            return getUserById(id);
        })
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