export default class WorksRepository {

  constructor(db, collectionName) {
      this.db = db;
      this.collectionName = collectionName;
  }

  async createCollection() {
      await this.db.createCollection(this.collectionName, {
          validator: {
              $jsonSchema: {
                  bsonType: 'object',
                  required: ['genero', 'subGenero', 'titulo', 'descripcion', 'descripcionMetrica', 'poemas', 'tema', 'idiomaOriginal', 'periodo', 'elaboracion', 'lugaresElaboracion', 'authorStageId'],
                  properties: {
                      genero: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      subGenero: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      titulo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      descripcion: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      descripcionMetrica: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      poemas: {
                          bsonType: 'array',
                          items: {
                              bsonType: 'string',
                              description: 'debe ser una cadena',
                          },
                          description: 'debe ser un array de cadenas',
                      },
                      tema: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      idiomaOriginal: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      periodo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      elaboracion: {
                          bsonType: 'date',
                          description: 'debe ser una fecha y es obligatorio',
                      },
                      lugaresElaboracion: {
                          bsonType: 'array',
                          items: {
                              bsonType: 'string',
                              description: 'debe ser una cadena',
                          },
                          description: 'debe ser un array de cadenas',
                      },
                      authorStageId: {
                          bsonType: 'objectId',
                          description: 'debe ser un ObjectId y es obligatorio',
                      },
                  },
              },
          },
      });
  }
}
