import React, { Component } from 'react';
import axios from 'axios';

import Hero from './Hero/Hero';

class Heroes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      heroes: []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount() {
    axios.get('/api/heroes').then(response => {
      this.setState({ heroes: response.data});
    });
  }

  render() {
    const { heroes } = this.state;
    let displayHeroes = heroes.map(hero => {
      return (
        <Hero 
          key={ hero.id }
          obj={ hero } />
      );
    });

    return (
      <div>
        { displayHeroes }
      </div>
    );
  }
}

export default Heroes;