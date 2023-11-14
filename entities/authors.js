const PERSONA_SCHEMA = {
    bsonType: 'object',
    required: ['nombre', 'nacimiento'],
    properties: {
        nombre: {
            bsonType: 'string',
            description: 'debe ser una cadena y es obligatorio',
        },
        nacimiento: {
            bsonType: 'date',
            description: 'debe ser una fecha y es obligatorio',
        },
    },
}

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
                  required: ['nombre', 'seudonimo', 'nacimiento', 'sexo', 'padres', 'hijos', 'hermanos'],
                  properties: {
                      nombre: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      seudonimo: {
                          bsonType: 'string',
                          description: 'debe ser una cadena y es obligatorio',
                      },
                      nacimiento: {
                          bsonType: 'date',
                          description: 'debe ser una fecha y es obligatorio',
                      },
                      fallecimiento: {
                          bsonType: ['date', 'null'], // Puede ser una fecha o nulo
                          description: 'debe ser una fecha o nulo',
                      },
                      sexo: {
                          enum: ['M', 'F', 'O'], // 'M' para masculino, 'F' para femenino, 'O' para otro
                          description: 'debe ser "M", "F" o "O" y es obligatorio',
                      },
                      padres: {
                          bsonType: 'array',
                          items: PERSONA_SCHEMA,
                      },
                      hijos: {
                          bsonType: 'array',
                          items: PERSONA_SCHEMA,
                      },
                      hermanos: {
                          bsonType: 'array',
                          items: PERSONA_SCHEMA,
                      },
                  },
              },
          },
      });
  }
}
