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

// endpoints that connect the back-end to the front-end as well as the external API used
app.get('/api/heroes', heroesCtrl.getHeroes);
app.post('/api/heroes', heroesCtrl.createHero);
app.put('/api/heroes/:id', heroesCtrl.editHero);
app.delete('/api/heroes/:id', heroesCtrl.deleteHero);

// sets up local server on port 3001
const port = 3001;
app.listen(port, () => {
  console.log(`Server is listening on port: ${ port }`);
});