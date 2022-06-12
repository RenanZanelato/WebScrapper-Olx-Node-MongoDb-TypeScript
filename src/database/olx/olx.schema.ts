import { Schema } from "mongoose";

const OlxSchema = new Schema({
  olxId: String,
  createdDate: String,
  title: String,
  imgLink: String,
  link: String,
  price: String,
  locale: String,
  dateOfEntry: {
    type: Date,
    default: new Date()
  }
  });
  
  export default OlxSchema;


  