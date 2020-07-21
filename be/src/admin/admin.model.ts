import * as mongoose from 'mongoose';
import {Document} from 'mongoose'
​
export const AdminSchema = new mongoose.Schema({
    faculty: { type: String},
    universityName:{type:String}
 
});
​
export interface Admin extends Document {
  save(): any;

    faculty: String;
    universityName: String;
    
}