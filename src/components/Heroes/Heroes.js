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
      newHeroInput: '',
      editHero: false
    }
    this.componentDidMount = this.componentDidMount.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.addNewHero = this.addNewHero.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
    this.editNewHero = this.editNewHero.bind(this);
    this.deleteHero = this.deleteHero.bind(this);
  }

  componentDidMount() {
    axios.get('/api/heroes').then(response => {
      this.setState({ heroes: response.data});
    });
  }

  handleChange(event) {
    // console.log(event.target.value);
    this.setState({ newHeroInput: event.target.value });
  }

  addNewHero(event) {
    // // prevents the page from refreshing when submitted
    // event.preventDefault();
    axios
      .post('/api/heroes', { name: this.state.newHeroInput })
      .then(response => {
        this.setState({
          heroes: response.data,
          newHeroInput: ''
        });
      });
  }

  toggleEdit() {
    this.setState({ editHero: !this.state.editHero });
  }

  editNewHero(id, description) {
    axios
      .put(`/api/heroes/${ id }`, { description })
      .then(response => {
        this.setState({
          heroes: response.data,
          editHero: false
        });
      });
  }

  deleteHero(id) {
    axios
      .delete(`/api/heroes/${ id }`)
      .then(response => {
        this.setState({
          heroes: response.data
        });
      });
  }

  render() {
    const { heroes, newHeroInput, editHero } = this.state;
    let displayHeroes = heroes.map(hero => {
      return (
        <Hero 
          key={ hero.id }
          obj={ hero }
          allowEdit={ editHero }
          editHeroes={ this.editNewHero }
          deleteHeroes={ this.deleteHero } />
      );
    });

    return (
      <div>
        <Input
          placeHolder="Add a new hero!"
          inputValue={ newHeroInput }
          handleChange={ this.handleChange } />
        <Button clickButton={ this.addNewHero }>Add Hero!</Button>
        <br />
        <Button clickButton={ this.toggleEdit }>Edit Heroes!</Button>
        { displayHeroes }
      </div>
    );
  }
}

export default Heroes;