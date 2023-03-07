const { connect, connection } = require('mongoose');

connect('mongodb+srv://jesortega7:root1234@cluster0.lk9nnzu.mongodb.net/socialNetworkDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = connection;
