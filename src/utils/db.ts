import { Mongoose, connect } from 'mongoose';

let cachedDb: Mongoose | null = null;

export default async function dbConnect(): Promise<Mongoose> {
    const MONGODB_URI = process.env.MONGODB_URI;

    if (!MONGODB_URI) {
        throw new Error('Please define the MONGODB_URI environment variable');
    }

    if (cachedDb) {
        return cachedDb;
    }

    if (!cachedDb) {
        cachedDb = await connect(MONGODB_URI, { bufferCommands: false, dbName: 'dev' })
    }

    return cachedDb;
}