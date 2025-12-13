const mongoose = require("mongoose");
function connectDB() {
  if (!process.env.DB_LINK) {
    console.log("Missing DB_LINK environment variable");
    return;
  }

  mongoose
    .connect(process.env.DB_LINK)
    .then(() => console.log("DB_CONNECTED"))
    .catch((err) => console.log(`err ${err.message}`));
}


module.exports = connectDB