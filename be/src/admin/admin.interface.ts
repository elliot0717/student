import { Document } from 'mongoose';

export interface admin extends Document {
  universityName: String;
  faculty: string;
}
