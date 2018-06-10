import React, { Component } from 'react';
import Heroes from './../Heroes';
import Button from './../../Button/Button';

class Hero extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { obj, deleteHeroes } = this.props;
    return (
      <div>
        <h2>Name: { obj.name }</h2>
        <p>Hero ID: { obj.id }</p>
        <p>Description: { obj.description }</p>
        <Button clickButton={ () => deleteHeroes(obj.id) }>Delete!</Button>
        <br />
        <br />
      </div>
    );
  }
}

export default Hero;