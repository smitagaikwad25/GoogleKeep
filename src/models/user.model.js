import { Schema, model } from 'mongoose';

const userSchema = new Schema(
  {
    fName: { type: String, required: true, },
    lName: { type: String, required: true, },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true
  }
);

export default model('User', userSchema);
