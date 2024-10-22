import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    created: { type: Date, default: Date.now }, // Automatically set to the current date
    updated: { type: Date, default: Date.now }  // Automatically set to the current date
});

// Middleware to update the 'updated' field before saving the document
userSchema.pre('save', function (next) {
    this.updated = Date.now();
    next();
});

const User = mongoose.model('User', userSchema);
export default User;
