import React, { Component } from 'react';
import axios from 'axios';

import Hero from './Hero/Hero';
import Button from './../Button/Button';
import Input from './../Input/Input';

class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: [],
      userInput: ''
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    axios.get('/api/heroes').then(response => {
      this.setState({ heroes: response.data});
    });
  }

  handleChange(event) {
    this.setState({ userInput: event.target.value });
  }

  handleClick() {
    const { heroes, userInput } = this.state;
    let newHeroObj = {
      name: userInput,
      id: '25',
      description: 'test'
    };
    let newHeroesArr = heroes.slice().push(newHeroObj);
    this.setState({ heroes: newHeroesArr });
  }

  render() {
    const { heroes, userInput } = this.state;
    let displayHeroes = heroes.map(hero => {
      return (
        <Hero 
          key={ hero.id }
          obj={ hero } />
      );
    });

    return (
      <div>
        {/* <input
          onChange={ this.handleChange }
          placeholder="Add a new hero!"
          value={ userInput } /> */}
        <Input
          placeHolder="Add a new hero!"
          inputValue={ userInput }
          handleChange={ this.handleChange } />
        <Button>Add Hero!</Button>
        { displayHeroes }
      </div>
    );
  }
}

export default Heroes;