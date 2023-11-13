export default class AuthorStagesRepository {

  constructor(db, collectionName) {
      this.db = db;
      this.collectionName = collectionName;
  }

  async createCollection() {
      await this.db.createCollection(this.collectionName, {
          validator: {
              $jsonSchema: {
                  bsonType: 'object',
                  required: ['etapa', 'periodo', 'corriente', 'movimiento', 'estilo', 'descripcion', 'authorId'],
                  properties: {
                      etapa: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      periodo: {
                          bsonType: 'array',
                          items: {
                              bsonType: 'date',
                              description: 'debe ser una fecha',
                          },
                          description: 'debe ser un array de fechas y es obligatorio',
                      },
                      corriente: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      movimiento: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      estilo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      descripcion: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      authorId: {
                          bsonType: 'objectId',
                          description: 'debe ser un ObjectId y es obligatorio',
                      },
                  },
              },
          },
      });

    await this.db.collection(this.collectionName).createIndex({ etapa: 1 }, { unique: true });
  }
}
