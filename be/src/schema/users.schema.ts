import * as mongoose from 'mongoose';
​
export const UserSchema = new mongoose.Schema({
    email: { type: String, require: true },
    password: { type: String, require: true }
});
​
export interface Users {
    firstname: String;
    lastname: String
    email: String;
    password: String;
}
