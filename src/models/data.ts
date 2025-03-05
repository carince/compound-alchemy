import mongoose from 'mongoose';

const dataSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'Auth', required: true },
    currentLevel: { type: Number, enum: [1, 2, 3], default: 1 },
    progress: {
        level1: {
            cou: {
                completed: { type: Boolean, default: false },
                answers: { type: Map, of: Map }
            },
            quiz: {
                completed: { type: Boolean, default: false },
                score: { type: Number, default: 0 },
                answers: { type: Map, of: String }
            }
        },
        level2: {
            cou: {
                completed: { type: Boolean, default: false },
                answers: { type: Map, of: Map }
            },
            quiz: {
                completed: { type: Boolean, default: false },
                score: { type: Number, default: 0 },
                answers: { type: Map, of: String }
            }
        },
        level3: {
            elements: {
                unlocked: { type: [Number], default: [] }
            }
        },
        time: { type: Map, of: Map }
    }
});

export const Data = mongoose.models.Data || mongoose.model('Data', dataSchema);