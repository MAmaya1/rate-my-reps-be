const db = require('../data/dbConfig');

module.exports = {
    getUsers,
    getUserById,
    addUser
}

function getUsers() {
    return db('users')
        .select("id", "address", "email");
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