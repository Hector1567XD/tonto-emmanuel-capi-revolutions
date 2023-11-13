export default class AuthorsRepository {

  constructor(db, collectionName) {
      this.db = db;
      this.collectionName = collectionName;
  }

  async createCollection() {
      await this.db.createCollection(this.collectionName, {
          validator: {
              $jsonSchema: {
              bsonType: 'object',
              required: ['email', 'contraseña'],
              properties: {
                  email: {
                      bsonType: 'string',
                      description: 'debe ser una cadena y es obligatorio',
                  },
                  contraseña: {
                      bsonType: 'string',
                      description: 'debe ser una cadena y es obligatorio',
                  },
              },
              },
          },
      });
    
    await this.db.collection(this.collectionName).createIndex({ email: 1 }, { unique: true });
  }
}
