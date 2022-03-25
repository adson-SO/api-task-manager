const { Router } = require('express');
const project = require('./project.routes');

module.exports = server => {
    server.use((req, res, next) => {
        project(server, new Router());
        next();
    })
}