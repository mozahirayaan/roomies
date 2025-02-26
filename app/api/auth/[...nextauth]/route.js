import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import clientPromise from '@/app/lib/database.js';
import { MongoDBAdapter } from '@auth/mongodb-adapter';
import 'mongodb';

export const authOptions = {
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        }),
    ],
    adapter: MongoDBAdapter(clientPromise),
    session: {
        strategy: "database", // Store sessions in MongoDB
    },
};

// Pass the configuration to NextAuth
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
