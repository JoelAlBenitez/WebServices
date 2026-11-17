const express = require('express');

const app = express();

const contactRoutes = require('./routes/contacts.routes');
app.use(express.json());

app.use('/api/contacts', contactRoutes);

module.exports = app;