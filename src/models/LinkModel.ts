import { model, Schema } from 'mongoose';

export const LinkSchema = new Schema({
  url: { type: String, required: true },
  token: { type: String, required: true, unique: true }
})

export default model('Link', LinkSchema);
