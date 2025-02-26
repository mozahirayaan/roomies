import { MongoClient } from "mongodb";

// MongoDB client setup
const client = new MongoClient("mongodb://127.0.0.1:27017/UserDetails");
const clientPromise = client.connect().then(() => client);

export default clientPromise;

