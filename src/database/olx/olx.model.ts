import { model } from "mongoose";
import { IOlxDocument } from "./olx.types";
import OlxSchema from "./olx.schema";

export const OlxModel = model<IOlxDocument>("user", OlxSchema);