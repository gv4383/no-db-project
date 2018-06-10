import React, { Component } from 'react';
import Heroes from './../Heroes';
import Button from './../../Button/Button';
import Input from './../../Input/Input';

class Hero extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newHeroDescription: ''
    };
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleDescriptionChange(event) {
    // console.log(event.target.value);
    this.setState({ newHeroDescription: event.target.value });
  }

  render() {
    const { obj,  deleteHeroes, allowEdit, editHeroes } = this.props;
    const { newHeroDescription } = this.state;
    // console.log(obj);

    if (allowEdit) {
      return (
        <div>
          <h2>Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <Input
            placeHolder='Edit hero description!'
            inputValue={ newHeroDescription }
            handleChange={ this.handleDescriptionChange } />
          <Button clickButton={ () => editHeroes(obj.id, newHeroDescription) }>Edit Description!</Button>
          <br />
          <br />
        </div>
      );
    }
    else {
      return (
        <div>
          <h2>Name: { obj.name }</h2>
          <p>Hero ID: { obj.id }</p>
          <p>Description: { obj.description }</p>
          <Button clickButton={ () => deleteHeroes(obj.id) }>Delete Hero!</Button>
          <br />
          <br />
        </div>
      );
    }

    return (
      <div>
        <h2>Name: { obj.name }</h2>
        <p>Hero ID: { obj.id }</p>
        <p>Description: { obj.description }</p>
        <Button clickButton={ () => deleteHeroes(obj.id) }>Delete Hero!</Button>
        <br />
        <br />
      </div>
    );
  }
}

export default Hero;