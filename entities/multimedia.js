export default class MultimediaRepository {

  constructor(db, collectionName) {
      this.db = db;
      this.collectionName = collectionName;
  }

  async createCollection() {
      await this.db.createCollection(this.collectionName, {
          validator: {
              $jsonSchema: {
                  bsonType: 'object',
                  required: ['tipo', 'adjuntoA', 'adjuntoAId', 'titulo', 'descripcion', 'fuente', 'derechos', 'referenciaUrl', 'textoCompleto'],
                  properties: {
                      tipo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                          enum: ['PDF', 'TXT', 'EPUB'],
                      },
                      adjuntoA: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                          enum: ['Obra', 'Publicacion'],
                      },
                      adjuntoAId: {
                          bsonType: 'objectId',
                          description: 'debe ser un ObjectId y es obligatorio',
                      },
                      titulo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      descripcion: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      fuente: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      derechos: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      referenciaUrl: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      textoCompleto: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                  },
              },
          },
      });

      await this.db.collection(this.collectionName).createIndex({ textoCompleto: 'text' });
  }
}
