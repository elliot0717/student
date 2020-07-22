import * as mongoose from 'mongoose';
import { Document } from 'mongoose';
export const AdminSchema = new mongoose.Schema({
  universityName: { type: String },
  faculty: { type: String },
});
export interface Admin extends Document {
  save(): any;
  universityName: String;
  faculty: String;
}
