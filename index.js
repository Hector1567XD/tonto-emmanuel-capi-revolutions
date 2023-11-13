import { MongoClient } from 'mongodb';
import AuthorsRepository from './entities/authors.js';
import AuthorActivitiesRepository from './entities/author-activities.js';
import AuthorStagesRepository from './entities/author-stages.js';
import WorksRepository from './entities/works.js';
import PublicationsRepository from './entities/editions.js';
import MultimediaRepository from './entities/multimedia.js';

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'miBaseDeDatos2';

async function main() {
  const client = new MongoClient(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    await client.connect();
    const db = client.db(dbName);

    const authors = new AuthorsRepository(db, 'authors');
    await authors.createCollection();
    
    const authorActivities = new AuthorActivitiesRepository(db, 'authorActivities');
    await authorActivities.createCollection();
      
    const authorStages = new AuthorStagesRepository(db, 'authorStages');
    await authorStages.createCollection();
      
    const works = new WorksRepository(db, 'works');
    await works.createCollection();
      
    const editions = new PublicationsRepository(db, 'editions');
    await editions.createCollection();

    const multimedia = new MultimediaRepository(db, 'multimedia');
    await multimedia.createCollection();
      
  } finally {
    await client.close();
  }
}

main().catch(console.error);
