import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGODB_URI;
const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

let cachedClient = null;

export async function connectToDatabase() {

  if (cachedClient) {
    return cachedClient;
  }
  const client = new MongoClient(uri, options);

  try {
    console.log('Attempting to connect to MongoDB...');
    

    client.on('serverOpening', () => console.log('MongoDB server opening...'));
    client.on('serverClosed', () => console.log('MongoDB server closed.'));
    client.on('serverDescriptionChanged', (event) => console.log('MongoDB server description changed:', event));

    await client.connect();
    
    console.log('Connected to MongoDB');
    cachedClient = client;
    return client;
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
    throw error;
  }
}

export async function disconnectFromDatabase() {
  if (cachedClient) {
    await cachedClient.close();
    console.log('Disconnected from MongoDB');
    cachedClient = null;
  }
}
