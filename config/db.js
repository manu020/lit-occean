const mongoose = require("mongoose");
const db =
  "mongodb+srv://root:root@studentdetails-h2ylb.mongodb.net/test?retryWrites=true&w=majority";
const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    });
    console.log("mongoose connect");
  } catch (error) {
    console.error(error.message);

    process.exit(1);
  }
};
module.exports = connectDB;
