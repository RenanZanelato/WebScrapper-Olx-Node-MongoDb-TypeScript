import { mongoUriConnection } from "../configs/config.json";
import mongoose, {Mongoose} from "mongoose";

export const connect = async (): Promise<Mongoose> => await mongoose.connect(mongoUriConnection);

export const disconnect = (): Promise<void> => mongoose.connection.close();