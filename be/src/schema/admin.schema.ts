import * as mongoose from 'mongoose';
​
export const AdminSchema = new mongoose.Schema({
    faculty: String,
    universityName: String
});