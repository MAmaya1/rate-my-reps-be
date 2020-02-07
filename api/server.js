// Imports

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

// Import Routers

const repsRouter = require('../routers/reps-router');
const usersRouter = require('../routers/users-router');
const userRepsRouter = require('../routers/user-reps-router');

// Configure Middleware

server.use(express.json());
server.use(cors());
server.use(helmet());

// Configure Routes

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hi There!' });
})

server.use('/api/representatives', repsRouter);
server.use('/api/users', usersRouter);
server.use('/api/user-representatives', userRepsRouter);

module.exports = server;