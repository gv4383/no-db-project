import React, { Component } from 'react';

import Heroes from './../Heroes';
import Button from './../../Button/Button';
import Input from './../../Input/Input';
import './Hero.css';

/***This component sets up the template for each individual object being rendered to the DOM***/

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHeroDescription: '',
      editHero: false
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit() {
    // toggles whether or not you can edit individual hero descriptions
    this.setState({ editHero: !this.state.editHero });
  }

  handleDescriptionChange(event) {
    // sets input text that's being typed in the input bar to newHeroDescription
    this.setState({ newHeroDescription: event.target.value });
  }

  render() {
    // destructures methods and states passed through props
    const { obj,  deleteHeroes, allowEdit, editHeroes } = this.props;
    const { newHeroDescription } = this.state;

    /*** renders different pages based on if editing is toggled on/off ***/
    // editing is toggled on (true)
    if (this.state.editHero || allowEdit) {
      return (
        <div className="hero-container">
          <h2 className="hero-name">Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <div>
            {/* input new description for hero */}
            <Input
              className="input-box"
              placeHolder='Edit hero description!'
              inputValue={ newHeroDescription }
              handleChange={ this.handleDescriptionChange } />
            {/* <Button clickButton={ () => this.toggleEdit }>Toggle Edit!</Button> */}

            {/* submit any edits to the hero description */}
            <Button
              className="buttons submit-edit-button"
              clickButton={ () => editHeroes(obj.id, newHeroDescription) }>
              EDIT DESCRIPTION
            </Button>
          </div>

          {/* toggles editing */}
          <button
            className="buttons toggle-edit-delete-button"
            onClick={ this.toggleEdit }>
            TOGGLE EDIT
          </button>
        </div>
      );
    }
    // editing is togged off (false)
    else {
      return (
        <div className="hero-container">
          <h2 className="hero-name">Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <p>{ obj.description }</p>
          {/* <Button clickButton={ () => this.toggleEdit }>Toggle Edit!</Button> */}

          {/* toggles editing */}
          <button
            className="buttons toggle-edit-delete-button"
            onClick={ this.toggleEdit }>
            TOGGLE EDIT
          </button>

          {/* delete hero object and removes from DOM */}
          <Button
            className="buttons toggle-edit-delete-button"
            clickButton={ () => deleteHeroes(obj.id) }>
            DELETE HERO
          </Button>
        </div>
      );
    }
  }
}

export default Hero;