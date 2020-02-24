const express = require('express');
const app = express();
const cors = require('cors');

app.set('port', process.env.PORT || 4000);

app.use(cors());
app.use(express.json());

app.use('/api/admin', require('./routes/admin'));

module.exports = app;
