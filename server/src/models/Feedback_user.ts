import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String },
    feedback: { type: String, required: true },
    rating: { type: Number },
}, { timestamps: true });

export default mongoose.model("Feedback", userSchema);
