const express = require('express');
const path = require('path');
const app = express();
const hateoasLinker = require('express-hateoas-links');
const connected = require('./connection.js');

require('dotenv/config');

connected.then(() => {
  app.listen(process.env.PORT || 8089, () =>
    console.log(`Listening on ${process.env.PORT || 8089}`)
  );
});

app.use(express.static('public'));
app.use(hateoasLinker);

app.use(express.json({ limit: '25mb' }));
app.use(express.urlencoded({ limit: '25mb', extended: true }));

const router = require('./routes/index.js');
app.use('/api/v1', router); // every router will start with /api/v1

//Invalid request handle
app.get('*', function (req, res) {
  res.status(404).sendFile(path.join(__dirname, 'public', '404.html'));
});

