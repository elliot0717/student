import * as mongoose from 'mongoose';
​
export const AdminSchema = new mongoose.Schema({
    universityName: String,
    faculty: String
    
});