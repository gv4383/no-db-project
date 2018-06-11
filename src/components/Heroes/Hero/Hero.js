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
          <h2>Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <Input
            placeHolder='Edit hero description!'
            inputValue={ newHeroDescription }
            handleChange={ this.handleDescriptionChange } />
          {/* <Button clickButton={ () => this.toggleEdit }>Toggle Edit!</Button> */}
          <Button clickButton={ () => editHeroes(obj.id, newHeroDescription) }>Edit Description!</Button>
          <br />
          <br />
          <button onClick={ this.toggleEdit }>Toggle Edit!</button>
          <br />
          <br />
        </div>
      );
    }
    else {
      return (
        <div className="hero-container">
          <h2>Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <p>Description: { obj.description }</p>
          {/* <Button clickButton={ () => this.toggleEdit }>Toggle Edit!</Button> */}
          <button onClick={ this.toggleEdit }>Toggle Edit!</button>
          <br />
          <br />
          <Button clickButton={ () => deleteHeroes(obj.id) }>Delete Hero!</Button>
          <br />
          <br />
        </div>
      );
    }
  }
}

export default Hero;