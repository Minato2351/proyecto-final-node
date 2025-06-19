const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

// Inicializa Express
const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// Inicializa Firebase Admin
admin.initializeApp(); // Esto funciona si estás usando las variables de entorno en Render
const db = admin.firestore();
app.set('db', db);

// Rutas
app.use('/', require('./routes/paypal'));
app.use('/api', require('./routes/usuarios'));

// Escucha en el puerto asignado por Render
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});