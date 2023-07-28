const mongoose = require('mongoose')
mongoose.set('strictQuery', true);

const connect = async () => {
    return mongoose
    .connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('banco de dados on e funcionando :3')
    })
    .catch((err) => {
        console.error(err);
        throw err;
    })
}

module.exports = {
    connect
}