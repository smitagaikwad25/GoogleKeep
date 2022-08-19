import { Schema, model } from 'mongoose';

const lableSchema = new Schema(
  {
    label: { type: String, required: true },
    UserID: { type: String, ref: 'User' }
  },

  {
    timestamps: true
  }
);

export default model('Lable', lableSchema);
