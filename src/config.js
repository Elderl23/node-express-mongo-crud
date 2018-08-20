module.exports = {
    port: process.env.PORT || 3009,
    db: process.env.MONGODB || 'mongodb://localhost/crud',
    SECRET_TOKEN: 'miclavedetokens'
}