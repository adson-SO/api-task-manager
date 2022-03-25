const express = require('express');
const router = require('./routes');

class App {
    constructor() {
        this.express = express();
        this.middlewares();
        this.routes();
    }

    middlewares() {
        this.express.use(express.json());
    }

    routes() {
        router(this.express);
    }
}

module.exports = new App().express;