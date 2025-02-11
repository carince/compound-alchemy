import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
    progress: {
        pretest: {
            score: { type: Number },
            answers: { type: Map, of: String },
        },
        posttest: {
            score: { type: Number },
            answers: { type: Map, of: String },
        },
        elements: {
            unlocked: { type: [Number] },
        }
    }
});

export const Data = mongoose.models.Data || mongoose.model('Data', dataSchema);