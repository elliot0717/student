  
import { Document } from 'mongoose';

export interface admin extends Document {
    faculty: string;
}