export default class PublicationsRepository {

  constructor(db, collectionName) {
      this.db = db;
      this.collectionName = collectionName;
  }

  async createCollection() {
      await this.db.createCollection(this.collectionName, {
          validator: {
              $jsonSchema: {
                  bsonType: 'object',
                  required: ['tipo', 'workId', 'titulo', 'fecha', 'lugar', 'edicion', 'editor', 'editora', 'idioma', 'traductor'],
                  properties: {
                      tipo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      workId: {
                          bsonType: 'objectId',
                          description: 'debe ser un ObjectId y es obligatorio',
                      },
                      titulo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      fecha: {
                          bsonType: 'date',
                          description: 'debe ser una fecha y es obligatorio',
                      },
                      lugar: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      edicion: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      editor: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      editora: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      idioma: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      traductor: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                  },
              },
          },
      });
  }
}
