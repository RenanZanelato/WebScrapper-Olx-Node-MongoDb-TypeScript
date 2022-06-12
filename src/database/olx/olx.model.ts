import * as Mongoose from "mongoose";
import OlxSchema from "./olx.schema";
import { IOlxDocument, IOlxModel } from "./olx.types";

export const OlxModel = Mongoose.model<IOlxDocument>("olx", OlxSchema) as IOlxModel;
