export default class AuthorActivitiesRepository {

  constructor(db, collectionName) {
      this.db = db;
      this.collectionName = collectionName;
  }

  async createCollection() {
      await this.db.createCollection(this.collectionName, {
          validator: {
              $jsonSchema: {
                  bsonType: 'object',
                  required: ['tipo', 'lugar', 'periodo', 'sitio', 'actividad', 'premiosRecibidos', 'grupos', 'revistas', 'authorId'],
                  properties: {
                      tipo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      lugar: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      periodo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      sitio: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      actividad: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      premiosRecibidos: {
                          bsonType: 'array',
                          items: {
                              bsonType: 'string',
                              description: 'debe ser una cadena',
                          },
                          description: 'debe ser un array de cadenas',
                      },
                      grupos: {
                          bsonType: 'array',
                          items: {
                              bsonType: 'string',
                              description: 'debe ser una cadena',
                          },
                          description: 'debe ser un array de cadenas',
                      },
                      revistas: {
                          bsonType: 'array',
                          items: {
                              bsonType: 'string',
                              description: 'debe ser una cadena',
                          },
                          description: 'debe ser un array de cadenas',
                      },
                      authorId: {
                          bsonType: 'objectId',
                          description: 'debe ser un ObjectId y es obligatorio',
                      },
                  },
              },
          },
      });

      await this.db.collection(this.collectionName).createIndex({ actividad: 1 }, { unique: true });
  }
}
