import * as mongoose from 'mongoose';
import {Document} from 'mongoose'
​
export const UserSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
});
​
export interface Users extends Document {
  save(): any;
    fname: String;
    Lname: String
    email: String;
    password: String;
}