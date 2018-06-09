/**************** HEROES CONTROLLER ****************/
const axios = require('axios');

let heroes = [];

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

/************** NOT FUNCTIONAL ****************/
// const deleteHero = (req, res) => {
//   const { id } = req.params;
//   let heroIndex = heroes.findIndex((hero) => hero.id == id);
//   heroes.splice(heroIndex, 1);
//   res.status(200).send(heroes);
// };
/************** NOT FUNCTIONAL ****************/

module.exports = {
  getHeroes
};