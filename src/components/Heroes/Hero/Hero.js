import React, { Component } from 'react';
import Heroes from './../Heroes';
import Button from './../../Button/Button';
import Input from './../../Input/Input';
import './Hero.css';

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
    console.log('Working!');
    this.setState({ editHero: !this.state.editHero });
  }

  handleDescriptionChange(event) {
    // console.log(event.target.value);
    this.setState({ newHeroDescription: event.target.value });
  }

  render() {
    const { obj,  deleteHeroes, allowEdit, editHeroes } = this.props;
    const { newHeroDescription } = this.state;
    // console.log(obj);

    if (this.state.editHero || allowEdit) {
      return (
        <div className="hero-container">
          <h2 className="hero-name">Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <div>
            <Input
              className="input-box"
              placeHolder='Edit hero description!'
              inputValue={ newHeroDescription }
              handleChange={ this.handleDescriptionChange } />
            {/* <Button clickButton={ () => this.toggleEdit }>Toggle Edit!</Button> */}
            <Button
              className="buttons submit-edit-button"
              clickButton={ () => editHeroes(obj.id, newHeroDescription) }>
              EDIT DESCRIPTION
            </Button>
          </div>
          <button
            className="buttons toggle-edit-delete-button"
            onClick={ this.toggleEdit }>
            TOGGLE EDIT
          </button>
        </div>
      );
    }
    else {
      return (
        <div className="hero-container">
          <h2 className="hero-name">Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <p>{ obj.description }</p>
          {/* <Button clickButton={ () => this.toggleEdit }>Toggle Edit!</Button> */}
          <button
            className="buttons toggle-edit-delete-button"
            onClick={ this.toggleEdit }>
            TOGGLE EDIT
          </button>
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