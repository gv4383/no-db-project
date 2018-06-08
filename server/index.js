/**************** LOCAL SERVER ****************/
const express = require('express');
const { json } = require('body-parser');
// const bodyParser = require('body-parser');
const heroesCtrl = require('./controllers/heroesCtrl');

// Setting up local server
const app = express();
app.use(json());

// testing connection to local server
app.get('/api/test', (req, res) => {
  res.status(200).send({ message: "Hello, world!" });
});

app.get('/api/heroes', heroesCtrl.getHeroes);
app.delete('api/heroes/:id', heroesCtrl.deleteHero);

const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port: ${ port }`);
});