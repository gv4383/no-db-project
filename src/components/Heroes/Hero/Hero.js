import React, { Component } from 'react';
import Heroes from './../Heroes';

class Hero extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const { obj } = this.props;
    return (
      <div>
        <h2>Name: { obj.name }</h2>
        <p>Hero ID: { obj.id }</p>
        <p>Description: { obj.description }</p>
        <br />
        <br />
      </div>
    );
  }
}

export default Hero;