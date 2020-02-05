// Imports

const express = require('express');
const cors = require('cors');
const helmet = require('helmet');

const server = express();

// Import Routers

const repsRouter = require('../routers/reps-router');

// Configure Middleware

server.use(express.json());
server.use(cors());
server.use(helmet());

// Configure Routes

server.get('/', (req, res) => {
    res.status(200).json({ message: 'Hi There!' });
})

server.use('/api/representatives', repsRouter);

module.exports = server;