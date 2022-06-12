import { mongoUriConnection } from "../configs/config.json";
import * as Mongoose from "mongoose";

let database: Mongoose.Connection;

export const connect = () => {

  if (database) {
    return;
  }
  Mongoose.connect(mongoUriConnection, {
    useNewUrlParser: true,
    useFindAndModify: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  } as Mongoose.ConnectOptions);

  database = Mongoose.connection;
  database.once("open", async () => {
    console.log("Connected to database");
  });
  database.on("error", () => {
    console.log("Error connecting to database");
  });
};

export const disconnect = () => {
  if (!database) {
    return;
  }
  Mongoose.disconnect();
};