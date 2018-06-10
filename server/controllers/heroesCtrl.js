/**************** HEROES CONTROLLER ****************/
const axios = require('axios');

let heroes = [];
// API already brings in an array of 24 obj, each with a unique id starting at 1
let id = 24;

axios
  .get('https://overwatch-api.net/api/v1/hero/')
  .then(response => {
    // console.log(response.datnpma.data);
    const heroArr = response.data.data;
    // console.log(heroArr);
    heroes = heroArr;
});

const getHeroes = (req, res) => {
    res.status(200).send(heroes);
};

const createHero = (req, res) => {
  const { name } = req.body;
  // increments id
  id++;
  // creates new object to be pushed into Heroes array
  let newHero = {
    id,
    name,
    description: ''
  };
  heroes.push(newHero);
  res.status(200).send(heroes);
};

const editHero = (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  let heroIndex = heroes.findIndex((hero) => hero.id == id);
  heroes[heroIndex].description = description;
  res.status(200).send(heroes);
};

const deleteHero = (req, res) => {
  const { id } = req.params;
  let heroIndex = heroes.findIndex((hero) => hero.id == id);
  heroes.splice(heroIndex, 1);
  res.status(200).send(heroes);
};

module.exports = {
  getHeroes,
  createHero,
  editHero,
  deleteHero
};