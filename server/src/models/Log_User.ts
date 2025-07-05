import mongoose from 'mongoose';

const feedbackUserSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

export default mongoose.model('Login', feedbackUserSchema);