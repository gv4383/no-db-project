/**************** HEROES CONTROLLER ****************/

const axios = require('axios');

let heroes = [];
// API already brings in an array of 24 obj, each with a unique id starting at 1
let id = 24;

// retrieves data from external API and stores it in local server
axios
  .get('https://overwatch-api.net/api/v1/hero/')
  .then(response => {
    // console.log(response.datnpma.data);
    const heroArr = response.data.data;
    // console.log(heroArr);
    heroes = heroArr;
});

// retrieves data from external API and stores objects in heroes array
const getHeroes = (req, res) => {
    res.status(200).send(heroes);
};

// create a new hero
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
  // adds new hero object to the heroes array
  heroes.push(newHero);
  res.status(200).send(heroes);
};

// edit an existing hero's discription
const editHero = (req, res) => {
  const { id } = req.params;
  const { description } = req.body;
  let heroIndex = heroes.findIndex((hero) => hero.id == id);
  heroes[heroIndex].description = description;
  res.status(200).send(heroes);
};

// deletes an existing hero
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