const mongoose = require("mongoose");

function connect() {
    const mongoURI = 'mongodb://127.0.0.1:27017/products-database';

    mongoose.connect(mongoURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log(`Connectado ao: ${mongoURI}`);
    })
    .catch((error) => {
        console.error('Erro:', error);
    });

    const db = mongoose.connection;

    db.on("error", (error) => {
        console.error("Erro:", error);
    });
}

module.exports = { connect };
