module.exports = (server, router, prefix = '/api/project') => {
    server.use(prefix, router)
}