const path = require('path');
const express = require('express');
const app = express();

const PORT = 4000;

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (_, res) => {
    res.send(path.join(__dirname, '../build/index.html'));
});
app.listen(PORT, () => {
    console.log(`[Info] Server is listening on port ${PORT}`);
});

process.on('SIGTERM', () => {
    debug('SIGTERM signal received: closing HTTP server');
    server.close(() => {
        debug('HTTP server closed');
    });
});
