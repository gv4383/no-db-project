/**************** HEROES CONTROLLER ****************/
const axios = require('axios');

let heroes = [];

axios
  .get('https://overwatch-api.net/api/v1/hero/')
  .then(response => {
    const heroArr = response.data.data;
    heroes = heroArr;
});

const getHeroes = (req, res) => {
    res.status(200).send(heroes);
};

const deleteHero = (req, res) => {
  const { id } = req.params;
  let heroIndex = heroes.findIndex((hero) => hero["id"] == id);
  heroes.splice(heroIndex - 1, 1);
  res.status(200).send(heroes);
};

module.exports = {
  getHeroes,
  deleteHero
};