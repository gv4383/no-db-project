import React, { Component } from 'react';
import axios from 'axios';

import Hero from './Hero/Hero';
import Button from './../Button/Button';
import Input from './../Input/Input';
import './Heroes.css';

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
    // sets whatever is typed in the input bar to newHeroInput
    this.setState({ newHeroInput: event.target.value });
  }

  addNewHero(event) {
    // sends a request to back-end to create a new hero entry
    // after the request is made, the new hero is added to heroes array and the input is reset
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
    // toggles whether or not hero descriptions can be edited
    this.setState({ editHero: !this.state.editHero });
  }

  editNewHero(id, description) {
    // sends request to back-end to edit description
    // when response is obtained, heroes array is updated and editing is set to disabled
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
    // sends request to back-end to delete an obj in the heroes array
    // when response is obtained, heroes array is updated
    axios
      .delete(`/api/heroes/${ id }`)
      .then(response => {
        this.setState({
          heroes: response.data
        });
      });
  }

  render() {
    // destructuring from this.state
    const { heroes, newHeroInput, editHero } = this.state;
    // maps over heroes array and renders however many objects are stored in heroes array
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
      <div className="main-container">
        <Input
          className="input-box top"
          placeHolder="Add a new hero!"
          inputValue={ newHeroInput }
          handleChange={ this.handleChange } />
        <Button className="buttons add-button top" clickButton={ this.addNewHero }>ADD HERO</Button>
        <br />
        <Button className="buttons edit-button top" clickButton={ this.toggleEdit }>EDIT HEROES</Button>
        { displayHeroes }
      </div>
    );
  }
}

export default Heroes;