import * as mongoose from 'mongoose';
​
export const UniversitiesSchema = new mongoose.Schema({
    fname: String,
    lname: Number,
    email: String,
    password: String
});