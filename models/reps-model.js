const db = require('../data/dbConfig');

module.exports = {
    getReps
}

function getReps() {
    return db('representatives');
}