import * as mongoose from 'mongoose';
​
export const UniversitiesSchema = new mongoose.Schema({
    name: String,
    facaulty: String,
});


