import * as mongoose from 'mongoose';
​
export const UsersSchema = new mongoose.Schema({
    fname: String,
    lname: Number,
    email: String,
    password: String
});