import bcrypt from 'bcrypt';
import mongoose from 'mongoose';

const authSchema = new mongoose.Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
});

authSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next();
});

export const Auth = mongoose.models.Auth || mongoose.model('Auth', authSchema);