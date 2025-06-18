const functions = require('firebase-functions');
const express = require('express');
const cors = require('cors');
const admin = require('firebase-admin');

const app = express();

// Middleware
app.use(express.json());
app.use(cors({ origin: true }));

// Inicializa Firebase Admin automáticamente (sin archivo json)
admin.initializeApp();

const db = admin.firestore();
app.set('db', db);

// Rutas
app.use('/', require('./routes/paypal'));
app.use('/api', require('./routes/usuarios'));

// Exporta como función HTTP
exports.api = functions.https.onRequest(app);