const mongoose = require('mongoose');

const mongoURL = 'mongodb://127.0.0.1:27017/miBaseDeDatos';

const usuariosCollectionName = 'Usuarios';
const booksCollectionName = 'Books';

// Definir esquema para Usuarios
const usuarioSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

usuarioSchema.set('validator', {
  $jsonSchema: {
    bsonType: 'object',
    required: ['email', 'password'],
    properties: {
      email: {
        bsonType: 'string',
        description: 'debe ser una cadena y es obligatorio',
      },
      password: {
        bsonType: 'string',
        description: 'debe ser una cadena y es obligatorio',
      },
    },
  },
});

const Usuario = mongoose.model(usuariosCollectionName, usuarioSchema);

// Definir esquema para Books
const bookSchema = new mongoose.Schema({
  contenido: { type: String, required: true },
  refUrl: { type: String, required: true },
  usuarioId: { type: mongoose.Schema.Types.ObjectId, required: true },
});

bookSchema.set('validator', {
  $jsonSchema: {
    bsonType: 'object',
    required: ['contenido', 'refUrl', 'usuarioId'],
    properties: {
      contenido: {
        bsonType: 'string',
        description: 'debe ser una cadena y es obligatorio',
      },
      refUrl: {
        bsonType: 'string',
        description: 'debe ser una cadena y es obligatorio',
      },
      usuarioId: {
        bsonType: 'objectId',
        description: 'debe ser un ObjectId y es obligatorio',
      },
    },
  },
});

const Book = mongoose.model(booksCollectionName, bookSchema);

async function main() {
  // Conectar a la base de datos
  await mongoose.connect(mongoURL, { useNewUrlParser: true, useUnifiedTopology: true });

  try {
    // Crear la colección de Usuarios con índice único en el campo email
    await Usuario.init();
    console.log('Colección de Usuarios creada con éxito.');

    // Crear la colección de Books con referencia al usuario
    await Book.init();
    console.log('Colección de Books creada con éxito.');

    // Insertar datos de usuarios
    const usuario1 = await Usuario.create({ email: 'usuario1@example.com', password: 'contraseña1' });
    const usuario2 = await Usuario.create({ email: 'usuario2@example.com', password: 'contraseña2' });

    // Insertar datos de libros con referencia a usuarios
    await Book.insertMany([
      { contenido: 'Contenido del libro 1', refUrl: 'url1', usuarioId: usuario1._id },
      { contenido: 'Contenido del libro 2', refUrl: 'url2', usuarioId: usuario2._id },
    ]);

    console.log('Datos insertados con éxito.');

  } finally {
    await mongoose.connection.close();
  }
}

main().catch(console.error);
