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
    // console.log(event.target.value);
    this.setState({ userInput: event.target.value });
  }

  handleClick(event) {
    // // prevents the page from refreshing when submitted
    // event.preventDefault();
    axios
      .post(`/api/heroes`, { name: this.state.userInput })
      .then(response => {
        this.setState({
          heroes: response.data,
          userInput: ''
        });
      });
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
        <Input
          placeHolder="Add a new hero!"
          inputValue={ userInput }
          handleChange={ this.handleChange } />
        <Button clickButton={ this.handleClick }>
          Add Hero!
        </Button>
        { displayHeroes }
      </div>
    );
  }
}

export default Heroes;