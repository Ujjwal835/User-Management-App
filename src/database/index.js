import mongoose from "mongoose";

const connectToDB = async () => {
  const url =
    "mongodb+srv://ujjwaljindal835:nextuser123@cluster0.sfauc5c.mongodb.net/";
  mongoose
    .connect(url)
    .then(() => console.log("Database connection is successful"))
    .catch((e) => console.log(e));
};

export default connectToDB;
