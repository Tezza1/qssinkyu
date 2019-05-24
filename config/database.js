if (process.env.NODE_ENV === 'production') {
    module.exports = {
        mongoURI: 'mongodb+srv://admin:admin12@cluster0-h3shv.mongodb.net/test?retryWrites=true'
    }
}
else {
    module.exports = {
        mongoURI: 'mongodb://localhost/devlpr-npad'
    }
}
