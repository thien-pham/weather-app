const express = require('express');
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 8080;
const cors = require('cors');

app.use(cors());
app.use(express.static('src'));
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(PORT => {
  console.log(`Listening on port: ${PORT}`);
});
