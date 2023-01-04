const mongoose = require("mongoose")

mongoose.connect(process.env.dbpassword)

    .then(() => console.log("Db is connnecting successfully...."))
    .catch((error) => console.log("error while connecting databases", error))