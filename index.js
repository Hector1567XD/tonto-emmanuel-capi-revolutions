import { MongoClient } from 'mongodb';
import AuthorsRepository from './authors.js';

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'miBaseDeDatos2';

async function main() {
  const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);

    const authors = new AuthorsRepository(db, 'authors');
    await authors.createCollection();

  } finally {
    await client.close();
  }
}

main().catch(console.error);
