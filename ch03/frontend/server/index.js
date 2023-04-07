const path = require('path');
const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (_, res) => {
    res.send(path.join(__dirname, '../build/index.html'));
});

const server = app.listen(PORT, () => {
    console.log(`[Info] Server is listening on port ${PORT}`);
});

/**
 * @param {NodeJS.SignalsListener} signal
 */
const gracefulShutdownHandler = (signal) => {
    console.log(signal + ' signal received: closing HTTP server');
    server.close(() => {
        console.log('HTTP server closed');
    });
};

process.on('SIGTERM', gracefulShutdownHandler);
process.on('SIGINT', gracefulShutdownHandler);
