import mongoose from "mongoose";
export const dbConnect = async () => {
  try {
    if (mongoose.connection.readyState >= 1) {
      console.log("Already Connected to DB");
      return;
    }
    return mongoose.connect(
      process.env.DB_CONNECTION,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: true,
      },
      () => {
        console.log("Connected to DB");
      }
    );
  } catch (error) {
    console.log(error);
  }
};
