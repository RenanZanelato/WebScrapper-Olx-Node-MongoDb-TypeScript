import { Document, Model } from "mongoose";

export interface IOlxSchema {
    olxId: String;
    createdDate: String;
    title: String;
    imgLink: String;
    link: String;
    price: String;
    locale: String;
    dateOfEntry?: Date;
}
export interface IOlxDocument extends IOlxSchema, Document {}

export interface IOlxModel extends Model<IOlxDocument> {}
  