import { Schema, Document } from 'mongoose';

export const UserSchema = new Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  email: { type: String, required: true },
});

export interface User extends Document {
  id: string;
  name: string;
  age: number;
  email: string;
}
