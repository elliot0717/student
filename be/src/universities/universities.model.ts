import * as mongoose from 'mongoose';
import {Document} from 'mongoose'
​
export const UserSchema = new mongoose.Schema({
    name: { type: String, require: true },
    facaulty: { type: String, require: true }
});
​
export interface Universities extends Document {
  save(): any;
  name: String,
  facaulty: String,
}